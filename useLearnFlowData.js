import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { COURSE_META, COURSES } from '../data/courses';
import { DEFAULT_NOTIFICATION_SETTINGS, DEFAULT_POMODORO_SETTINGS, EMPTY_ACTIVITY } from '../constants/firebaseDefaults';
import {
  createCustomCourse,
  setLessonProgress as persistLessonProgress,
  trackCourse,
  untrackCourse,
} from '../services/courseService';
import { syncLeaderboardEntry, subscribeToLeaderboard } from '../services/leaderboardService';
import { upsertNote } from '../services/noteService';
import { updatePomodoroStats } from '../services/pomodoroService';
import { createSubmission, updateProblemStatus } from '../services/problemService';
import { createSchedule } from '../services/scheduleService';
import { createTask, deleteTask as removeTask, toggleTask as persistToggleTask } from '../services/taskService';
import {
  deleteUserNode,
  ensureUserDataReady,
  exportUserData,
  resetUserData,
  subscribeToUserData,
  updateUserNotifications,
  updateUserPomodoroSettings,
  updateUserStats,
} from '../services/userDataService';

const EMPTY_DATA = {
  profile: null,
  trackedCourses: [],
  trackedCoursesMap: {},
  tasks: [],
  schedule: [],
  notes: [],
  customCourses: [],
  courseProgress: {},
  problemStatuses: {},
  submissions: [],
  stats: null,
  pomodoro: null,
  settings: null,
  leaderboard: [],
};

export function useLearnFlowData(currentUser) {
  const [state, setState] = useState({
    loading: false,
    error: '',
    data: EMPTY_DATA,
  });
  const seededUserRef = useRef('');

  useEffect(() => {
    // Leaderboard là nguồn dữ liệu public, nên tách listener riêng để không phụ thuộc phiên user.
    const unsubscribe = subscribeToLeaderboard(
      (leaderboard) => {
        setState((previous) => ({
          ...previous,
          data: {
            ...previous.data,
            leaderboard,
          },
        }));
      },
      () => {},
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!currentUser?.uid) {
      setState((previous) => ({
        loading: false,
        error: '',
        data: {
          ...EMPTY_DATA,
          leaderboard: previous.data.leaderboard,
        },
      }));
      return undefined;
    }

    let alive = true;
    setState((previous) => ({ ...previous, loading: true, error: '' }));

    const connect = async () => {
      try {
        if (seededUserRef.current !== currentUser.uid) {
          await ensureUserDataReady(currentUser);
          seededUserRef.current = currentUser.uid;
        }

        // User data được subscribe một lần theo uid để tránh duplicate listener khi re-render.
        const unsubscribeUser = subscribeToUserData(
          currentUser.uid,
          (userData) => {
            if (!alive) return;
            setState((previous) => ({
              ...previous,
              loading: false,
              error: '',
              data: {
                ...previous.data,
                ...userData,
              },
            }));
          },
          () => {
            if (!alive) return;
            setState((previous) => ({
              ...previous,
              loading: false,
              error: 'Không thể đồng bộ dữ liệu học tập.',
            }));
          },
        );

        return () => {
          unsubscribeUser();
        };
      } catch (error) {
        if (!alive) return () => {};
        setState((previous) => ({
          ...previous,
          loading: false,
          error: error.message || 'Không thể chuẩn bị dữ liệu người dùng.',
        }));
        return () => {};
      }
    };

    let cleanup = () => {};
    connect().then((unsubscribe) => {
      cleanup = unsubscribe || (() => {});
    });

    return () => {
      alive = false;
      cleanup();
    };
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser?.uid || !state.data.profile || !state.data.stats) return;

    syncLeaderboardEntry({
      uid: currentUser.uid,
      profile: state.data.profile,
      score: state.data.stats.score || 0,
    }).catch(() => {});
  }, [currentUser, state.data.profile, state.data.stats]);

  const value = useMemo(() => {
    const stats = state.data.stats || {
      score: 0,
      experience: 0,
      streak: 0,
      lessonsWeek: 0,
      activity: EMPTY_ACTIVITY,
      todayMs: 0,
      thisWeekMs: 0,
      thisMonthMs: 0,
      lastResetDate: new Date().toDateString(),
      lastLoginDate: '',
    };
    const pomodoro = state.data.pomodoro || {
      settings: DEFAULT_POMODORO_SETTINGS,
      stats: { count: 0, totalSec: 0 },
    };
    const settings = state.data.settings || { notifications: DEFAULT_NOTIFICATION_SETTINGS };

    return {
      loading: state.loading,
      error: state.error,
      profile: state.data.profile,
      trackedCourses: state.data.trackedCourses,
      trackedCoursesMap: state.data.trackedCoursesMap,
      tasks: state.data.tasks,
      schedule: state.data.schedule,
      notes: state.data.notes,
      customCourses: state.data.customCourses,
      courseProgress: state.data.courseProgress,
      problemStatuses: state.data.problemStatuses,
      submissions: state.data.submissions,
      leaderboard: state.data.leaderboard,
      stats,
      experience: stats.experience || 0,
      pomodoro,
      settings,
    };
  }, [state]);

  async function createTaskItem(task) {
    await createTask(currentUser.uid, task);
  }

  async function toggleTaskItem(task) {
    await persistToggleTask(currentUser.uid, task);
  }

  async function deleteTaskItem(taskId) {
    await removeTask(currentUser.uid, taskId);
  }

  async function saveNote(note) {
    await upsertNote(currentUser.uid, note);
  }

  async function createScheduleItem(item) {
    await createSchedule(currentUser.uid, item);
  }

  async function createCourseItem(course) {
    await createCustomCourse(currentUser.uid, course);
  }

  async function trackCourseItem(course, options = {}) {
    await trackCourse(currentUser.uid, course, options);
  }

  async function untrackCourseItem(courseId) {
    await untrackCourse(currentUser.uid, courseId);
  }

  async function toggleLessonProgress(courseId, lessonIndex, nextValue, { scoreDelta = 0, lessonsWeekDelta = 0 } = {}) {
    // Progress của bài học là source of truth; stats chỉ là dữ liệu dẫn xuất phục vụ UI nhanh hơn.
    await persistLessonProgress(currentUser.uid, courseId, lessonIndex, nextValue);

    if (scoreDelta || lessonsWeekDelta) {
      await updateUserStats(currentUser.uid, (currentStats) => ({
        ...currentStats,
        score: Math.max(0, (currentStats.score || 0) + scoreDelta),
        lessonsWeek: Math.max(0, (currentStats.lessonsWeek || 0) + lessonsWeekDelta),
      }));
    }
  }

  async function setProblemStatus(problemId, nextStatus) {
    await updateProblemStatus(currentUser.uid, problemId, nextStatus);
  }

  async function saveSubmission(submission, scoreDelta = 0, experienceDelta = 0) {
    await createSubmission(currentUser.uid, submission);

    if (scoreDelta || experienceDelta) {
      await updateUserStats(currentUser.uid, (currentStats) => ({
        ...currentStats,
        score: (currentStats.score || 0) + scoreDelta,
        experience: (currentStats.experience || 0) + experienceDelta,
      }));
    }
  }

  async function setNotificationSettings(notifications) {
    await updateUserNotifications(currentUser.uid, notifications);
  }

  async function setPomodoroSettings(settings) {
    await updateUserPomodoroSettings(currentUser.uid, settings);
  }

  async function savePomodoroStats(stats) {
    await updatePomodoroStats(currentUser.uid, stats);
  }

  async function updateStudyStats(updater) {
    await updateUserStats(currentUser.uid, updater);
  }

  const syncDailyStreak = useCallback(async () => {
    const todayString = new Date().toDateString();
    const lastLoginDate = value.stats.lastLoginDate || '';

    if (lastLoginDate === todayString) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    await updateUserStats(currentUser.uid, (currentStats) => ({
      ...currentStats,
      streak: lastLoginDate === yesterday.toDateString() ? (currentStats.streak || 0) + 1 : 1,
      lastLoginDate: todayString,
    }));
  }, [currentUser?.uid, value.stats.lastLoginDate]);

  const pushActivitySnapshot = useCallback(async () => {
    await updateUserStats(currentUser.uid, (currentStats) => {
      const now = new Date();
      let {
        todayMs = 0,
        thisWeekMs = 0,
        thisMonthMs = 0,
        lastResetDate = now.toDateString(),
        activity = EMPTY_ACTIVITY,
      } = currentStats;

      const lastReset = new Date(lastResetDate);

      if (now.toDateString() !== lastReset.toDateString()) {
        todayMs = 0;

        if (now.getMonth() !== lastReset.getMonth() || now.getFullYear() !== lastReset.getFullYear()) {
          thisMonthMs = 0;
        }

        const diff = now.getTime() - lastReset.getTime();
        const days = diff / (1000 * 3600 * 24);
        const nowDay = now.getDay() === 0 ? 7 : now.getDay();
        const lastDay = lastReset.getDay() === 0 ? 7 : lastReset.getDay();
        
        if (days >= 7 || nowDay < lastDay) {
          thisWeekMs = 0;
          activity = [...EMPTY_ACTIVITY];
        }
      }

      todayMs += 60000;
      thisWeekMs += 60000;
      thisMonthMs += 60000;

      const todayIndex = now.getDay() === 0 ? 6 : now.getDay() - 1;
      const nextActivity = [...activity];
      nextActivity[todayIndex] += 1;

      return {
        ...currentStats,
        todayMs,
        thisWeekMs,
        thisMonthMs,
        lastResetDate: now.toDateString(),
        activity: nextActivity,
        lastActivitySyncAt: Date.now(),
      };
    });
  }, [currentUser?.uid]);

  async function exportCurrentUserData() {
    return exportUserData(currentUser.uid);
  }

  async function resetCurrentUserData() {
    await resetUserData(currentUser.uid, currentUser);
  }

  async function clearEditorHistory() {
    await deleteUserNode(currentUser.uid, 'submissions');
  }

  function buildCustomCourse(input) {
    const meta = COURSE_META[input.category] || COURSE_META.Khác;
    const totalLessons = Number(input.total || 10);

    return {
      id: `c_${Date.now()}`,
      name: input.name.trim(),
      teacher: input.teacher.trim() || 'Chưa rõ',
      category: input.category,
      emoji: meta.emoji,
      color: meta.color,
      fill: meta.fill,
      totalLessons,
      tag: 'new',
      tagText: '🆕 Mới',
      lessons: Array.from({ length: totalLessons }, (_, index) => ({
        name: `Bài ${index + 1}`,
        dur: '30 phút',
      })),
      createdAt: Date.now(),
    };
  }

  return {
    ...value,
    catalogCourses: COURSES,
    createTaskItem,
    toggleTaskItem,
    deleteTaskItem,
    saveNote,
    createScheduleItem,
    createCourseItem,
    trackCourseItem,
    untrackCourseItem,
    toggleLessonProgress,
    setProblemStatus,
    saveSubmission,
    setNotificationSettings,
    setPomodoroSettings,
    savePomodoroStats,
    updateStudyStats,
    syncDailyStreak,
    pushActivitySnapshot,
    exportCurrentUserData,
    resetCurrentUserData,
    clearEditorHistory,
    buildCustomCourse,
  };
}
