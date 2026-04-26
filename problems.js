const problem = (id, name, diff, tags, ac, extras = {}) => ({
  id,
  name,
  diff,
  tags,
  ac,
  description: `Bài toán ${name}. Đây là bài luyện tập lập trình.`,
  examples: [{ input: 'Xem đề bài chi tiết', output: '' }],
  constraints: ['Xem chi tiết'],
  testcases: [{ input: '// Trường hợp kiểm thử', expected: '// Kết quả' }],
  starter: {
    python: `class Solution:\n    def solve(self):\n        # ${name}\n        pass\n`,
    javascript: `var solve = function() {\n  // ${name}\n};\n`,
    java: `class Solution {\n  public void solve() {\n    // ${name}\n  }\n}\n`,
    cpp: `class Solution {\npublic:\n  void solve() {\n    // ${name}\n  }\n};\n`,
  },
  ...extras,
});

export const PROBLEMS = [
  problem(1, 'Hai số có tổng bằng mục tiêu', 'easy', ['Mảng', 'Bảng băm'], '47.2%', {
    description:
      'Cho một mảng số nguyên `nums` và một số nguyên `target`, hãy trả về chỉ số của **hai phần tử** sao cho tổng của chúng bằng `target`.\n\nBạn có thể giả sử rằng mỗi đầu vào có **đúng một** lời giải, và bạn không được sử dụng cùng một phần tử hai lần.\n\nBạn có thể trả về kết quả theo bất kỳ thứ tự nào.',
    examples: [
      { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explain: 'Vì nums[0] + nums[1] = 2 + 7 = 9, ta trả về [0, 1].' },
      { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explain: 'nums[1] + nums[2] = 2 + 4 = 6.' },
      { input: 'nums = [3,3], target = 6', output: '[0,1]' },
    ],
    constraints: [
      '2 <= nums.length <= 10^4',
      '-10^9 <= nums[i] <= 10^9',
      '-10^9 <= target <= 10^9',
      'Chỉ tồn tại đúng một đáp án hợp lệ.',
    ],
    testcases: [
      { input: 'nums = [2,7,11,15]\ntarget = 9', expected: '[0,1]' },
      { input: 'nums = [3,2,4]\ntarget = 6', expected: '[1,2]' },
      { input: 'nums = [3,3]\ntarget = 6', expected: '[0,1]' },
    ],
    starter: {
      python: 'class Solution:\n    def twoSum(self, nums: list[int], target: int) -> list[int]:\n        pass\n',
      javascript: 'var twoSum = function(nums, target) {\n  \n};\n',
      java: 'class Solution {\n    public int[] twoSum(int[] nums, int target) {\n        return new int[]{};\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    vector<int> twoSum(vector<int>& nums, int target) {\n        return {};\n    }\n};\n',
    },
  }),

  problem(2, 'Cộng hai số', 'medium', ['Danh sách liên kết', 'Toán học'], '40.1%', {
    description:
      'Cho hai **danh sách liên kết không rỗng** biểu diễn hai số nguyên không âm. Các chữ số được lưu theo thứ tự **ngược** và mỗi nút chứa một chữ số. Hãy cộng hai số và trả về tổng dưới dạng danh sách liên kết.\n\nBạn có thể giả định hai số không có số 0 đứng đầu, ngoại trừ chính số 0.',
    examples: [
      { input: 'l1 = [2,4,3], l2 = [5,6,4]', output: '[7,0,8]', explain: '342 + 465 = 807.' },
      { input: 'l1 = [0], l2 = [0]', output: '[0]' },
      { input: 'l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', output: '[8,9,9,9,0,0,0,1]' },
    ],
    constraints: [
      'Số lượng nút trong mỗi danh sách liên kết nằm trong khoảng [1, 100].',
      '0 <= Node.val <= 9',
      'Đảm bảo danh sách biểu diễn một số không có số 0 đứng đầu.',
    ],
    testcases: [
      { input: 'l1 = [2,4,3]\nl2 = [5,6,4]', expected: '[7,0,8]' },
      { input: 'l1 = [0]\nl2 = [0]', expected: '[0]' },
      { input: 'l1 = [9,9,9,9,9,9,9]\nl2 = [9,9,9,9]', expected: '[8,9,9,9,0,0,0,1]' },
    ],
    starter: {
      python: 'class Solution:\n    def addTwoNumbers(self, l1, l2):\n        pass\n',
      javascript: 'var addTwoNumbers = function(l1, l2) {\n  \n};\n',
      java: 'class Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        return null;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n        return nullptr;\n    }\n};\n',
    },
  }),

  problem(3, 'Chuỗi con dài nhất không lặp ký tự', 'medium', ['Cửa sổ trượt', 'Chuỗi', 'Bảng băm'], '33.8%', {
    description:
      'Cho một chuỗi `s`, hãy tìm độ dài của **chuỗi con dài nhất** không chứa các ký tự lặp lại.',
    examples: [
      { input: 's = "abcabcbb"', output: '3', explain: 'Chuỗi con là "abc" với độ dài 3.' },
      { input: 's = "bbbbb"', output: '1', explain: 'Chuỗi con là "b" với độ dài 1.' },
      { input: 's = "pwwkew"', output: '3', explain: 'Chuỗi con là "wke" với độ dài 3.' },
    ],
    constraints: [
      '0 <= s.length <= 5 * 10^4',
      's bao gồm các chữ cái tiếng Anh, chữ số, ký tự đặc biệt và khoảng trắng.',
    ],
    testcases: [
      { input: 's = "abcabcbb"', expected: '3' },
      { input: 's = "bbbbb"', expected: '1' },
      { input: 's = "pwwkew"', expected: '3' },
      { input: 's = ""', expected: '0' },
    ],
    starter: {
      python: 'class Solution:\n    def lengthOfLongestSubstring(self, s: str) -> int:\n        pass\n',
      javascript: 'var lengthOfLongestSubstring = function(s) {\n  \n};\n',
      java: 'class Solution {\n    public int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int lengthOfLongestSubstring(string s) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(4, 'Trung vị của hai mảng đã sắp xếp', 'hard', ['Tìm kiếm nhị phân', 'Mảng', 'Chia để trị'], '36.2%', {
    description:
      'Cho hai mảng đã sắp xếp tăng dần `nums1` và `nums2` có kích thước lần lượt là `m` và `n`, hãy trả về **trung vị** của hai mảng đã gộp.\n\nĐộ phức tạp thời gian yêu cầu phải là `O(log(m+n))`.',
    examples: [
      { input: 'nums1 = [1,3], nums2 = [2]', output: '2.00000', explain: 'Mảng gộp = [1,2,3], trung vị = 2.' },
      { input: 'nums1 = [1,2], nums2 = [3,4]', output: '2.50000', explain: 'Mảng gộp = [1,2,3,4], trung vị = (2+3)/2 = 2.5.' },
    ],
    constraints: [
      'nums1.length == m',
      'nums2.length == n',
      '0 <= m <= 1000',
      '0 <= n <= 1000',
      '1 <= m + n <= 2000',
      '-10^6 <= nums1[i], nums2[i] <= 10^6',
    ],
    testcases: [
      { input: 'nums1 = [1,3]\nnums2 = [2]', expected: '2.00000' },
      { input: 'nums1 = [1,2]\nnums2 = [3,4]', expected: '2.50000' },
      { input: 'nums1 = []\nnums2 = [1]', expected: '1.00000' },
    ],
    starter: {
      python: 'class Solution:\n    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:\n        pass\n',
      javascript: 'var findMedianSortedArrays = function(nums1, nums2) {\n  \n};\n',
      java: 'class Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        return 0.0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        return 0.0;\n    }\n};\n',
    },
  }),

  problem(5, 'Chuỗi đối xứng dài nhất', 'medium', ['Quy hoạch động', 'Chuỗi'], '32.4%', {
    description:
      'Cho một chuỗi `s`, hãy trả về **chuỗi con đối xứng dài nhất** trong `s`.\n\nNếu có nhiều đáp án cùng độ dài, trả về chuỗi xuất hiện đầu tiên.',
    examples: [
      { input: 's = "babad"', output: '"bab"', explain: '"aba" cũng là đáp án hợp lệ.' },
      { input: 's = "cbbd"', output: '"bb"' },
    ],
    constraints: ['1 <= s.length <= 1000', 's chỉ bao gồm chữ cái và chữ số.'],
    testcases: [
      { input: 's = "babad"', expected: '"bab"' },
      { input: 's = "cbbd"', expected: '"bb"' },
      { input: 's = "a"', expected: '"a"' },
      { input: 's = "racecar"', expected: '"racecar"' },
    ],
    starter: {
      python: 'class Solution:\n    def longestPalindrome(self, s: str) -> str:\n        pass\n',
      javascript: 'var longestPalindrome = function(s) {\n  \n};\n',
      java: 'class Solution {\n    public String longestPalindrome(String s) {\n        return "";\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    string longestPalindrome(string s) {\n        return "";\n    }\n};\n',
    },
  }),

  problem(6, 'Chuyển đổi ZigZag', 'medium', ['Chuỗi'], '45.3%', {
    description:
      'Chuỗi `"PAYPALISHIRING"` được viết theo kiểu zizag trên một số hàng nhất định như sau:\n\n```\nP   A   H   N\nA P L S I I G\nY   I   R\n```\n\nSau đó đọc từng hàng: `"PAHNAPLSIIGYIR"`.\n\nViết hàm chuyển đổi một chuỗi cho trước thành kiểu zigzag với `numRows` hàng và trả về chuỗi đọc theo hàng ngang.',
    examples: [
      { input: 's = "PAYPALISHIRING", numRows = 3', output: '"PAHNAPLSIIGYIR"' },
      { input: 's = "PAYPALISHIRING", numRows = 4', output: '"PINALSIGYAHRPI"' },
      { input: 's = "A", numRows = 1', output: '"A"' },
    ],
    constraints: ['1 <= s.length <= 1000', 's bao gồm chữ cái tiếng Anh và dấu phẩy, dấu chấm.', '1 <= numRows <= 1000'],
    testcases: [
      { input: 's = "PAYPALISHIRING"\nnumRows = 3', expected: '"PAHNAPLSIIGYIR"' },
      { input: 's = "PAYPALISHIRING"\nnumRows = 4', expected: '"PINALSIGYAHRPI"' },
      { input: 's = "A"\nnumRows = 1', expected: '"A"' },
    ],
    starter: {
      python: 'class Solution:\n    def convert(self, s: str, numRows: int) -> str:\n        pass\n',
      javascript: 'var convert = function(s, numRows) {\n  \n};\n',
      java: 'class Solution {\n    public String convert(String s, int numRows) {\n        return "";\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    string convert(string s, int numRows) {\n        return "";\n    }\n};\n',
    },
  }),

  problem(7, 'Đảo ngược số nguyên', 'medium', ['Toán học'], '27.9%', {
    description:
      'Cho một số nguyên 32-bit có dấu `x`, hãy trả về `x` sau khi **đảo ngược các chữ số**.\n\nNếu đảo ngược `x` làm số vượt quá phạm vi số nguyên 32-bit có dấu `[-2^31, 2^31 - 1]`, trả về `0`.',
    examples: [
      { input: 'x = 123', output: '321' },
      { input: 'x = -123', output: '-321' },
      { input: 'x = 120', output: '21' },
    ],
    constraints: ['-2^31 <= x <= 2^31 - 1'],
    testcases: [
      { input: 'x = 123', expected: '321' },
      { input: 'x = -123', expected: '-321' },
      { input: 'x = 120', expected: '21' },
      { input: 'x = 1534236469', expected: '0' },
    ],
    starter: {
      python: 'class Solution:\n    def reverse(self, x: int) -> int:\n        pass\n',
      javascript: 'var reverse = function(x) {\n  \n};\n',
      java: 'class Solution {\n    public int reverse(int x) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int reverse(int x) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(8, 'Chuyển chuỗi thành số nguyên (atoi)', 'medium', ['Chuỗi'], '17.6%', {
    description:
      'Hãy cài đặt hàm `myAtoi(string s)` chuyển đổi một chuỗi thành số nguyên 32-bit có dấu (tương tự hàm `atoi` trong C/C++).\n\n**Thuật toán:**\n1. Bỏ qua các khoảng trắng đứng đầu.\n2. Xác định dấu (`+` hoặc `-`).\n3. Đọc các chữ số tiếp theo cho đến khi gặp ký tự không phải số.\n4. Chuyển đổi sang số nguyên; nếu vượt phạm vi `[-2^31, 2^31 - 1]` thì kẹp lại.',
    examples: [
      { input: 's = "42"', output: '42' },
      { input: 's = "   -042"', output: '-42', explain: 'Bỏ khoảng trắng, đọc dấu trừ, đọc 042.' },
      { input: 's = "1337c0d3"', output: '1337', explain: 'Dừng ở ký tự không phải số.' },
      { input: 's = "0-1"', output: '0' },
    ],
    constraints: ['0 <= s.length <= 200', 's bao gồm chữ cái tiếng Anh (in thường và in hoa), chữ số, dấu cách, dấu cộng, dấu trừ và dấu chấm.'],
    testcases: [
      { input: 's = "42"', expected: '42' },
      { input: 's = "   -042"', expected: '-42' },
      { input: 's = "1337c0d3"', expected: '1337' },
      { input: 's = "-91283472332"', expected: '-2147483648' },
    ],
    starter: {
      python: 'class Solution:\n    def myAtoi(self, s: str) -> int:\n        pass\n',
      javascript: 'var myAtoi = function(s) {\n  \n};\n',
      java: 'class Solution {\n    public int myAtoi(String s) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int myAtoi(string s) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(9, 'Số đối xứng', 'easy', ['Toán học'], '52.1%', {
    description:
      'Cho một số nguyên `x`, trả về `true` nếu `x` là **số đối xứng (palindrome)**, ngược lại trả về `false`.\n\nMột số nguyên là số đối xứng khi nó đọc xuôi và đọc ngược đều giống nhau. Ví dụ: `121` là số đối xứng, còn `-121` thì không.',
    examples: [
      { input: 'x = 121', output: 'true', explain: '121 đọc xuôi và ngược đều là 121.' },
      { input: 'x = -121', output: 'false', explain: 'Đọc từ trái sang phải: -121. Đọc ngược: 121-. Không đối xứng.' },
      { input: 'x = 10', output: 'false', explain: 'Đọc ngược là 01, không phải 10.' },
    ],
    constraints: ['-2^31 <= x <= 2^31 - 1'],
    testcases: [
      { input: 'x = 121', expected: 'true' },
      { input: 'x = -121', expected: 'false' },
      { input: 'x = 10', expected: 'false' },
      { input: 'x = 12321', expected: 'true' },
    ],
    starter: {
      python: 'class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        pass\n',
      javascript: 'var isPalindrome = function(x) {\n  \n};\n',
      java: 'class Solution {\n    public boolean isPalindrome(int x) {\n        return false;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    bool isPalindrome(int x) {\n        return false;\n    }\n};\n',
    },
  }),

  problem(10, 'So khớp biểu thức chính quy', 'hard', ['Quy hoạch động', 'Đệ quy', 'Chuỗi'], '28.3%', {
    description:
      'Cho chuỗi `s` và mẫu `p`, hãy cài đặt **so khớp biểu thức chính quy** hỗ trợ `"."` và `"*"` trong đó:\n- `"."` khớp với bất kỳ ký tự đơn nào.\n- `"*"` khớp với không hoặc nhiều ký tự đứng trước nó.\n\nSo khớp phải bao phủ **toàn bộ** chuỗi đầu vào (không phải một phần).',
    examples: [
      { input: 's = "aa", p = "a"', output: 'false', explain: '"a" không khớp toàn bộ "aa".' },
      { input: 's = "aa", p = "a*"', output: 'true', explain: '"a*" có nghĩa là không hoặc nhiều "a".' },
      { input: 's = "ab", p = ".*"', output: 'true', explain: '".*" khớp với mọi chuỗi.' },
    ],
    constraints: [
      '1 <= s.length <= 20',
      '1 <= p.length <= 20',
      's chỉ chứa chữ cái thường.',
      'p chỉ chứa chữ cái thường, "." và "*".',
      'Đảm bảo với mỗi lần xuất hiện của "*", sẽ có ký tự hợp lệ đứng trước.',
    ],
    testcases: [
      { input: 's = "aa"\np = "a"', expected: 'false' },
      { input: 's = "aa"\np = "a*"', expected: 'true' },
      { input: 's = "ab"\np = ".*"', expected: 'true' },
      { input: 's = "aab"\np = "c*a*b"', expected: 'true' },
    ],
    starter: {
      python: 'class Solution:\n    def isMatch(self, s: str, p: str) -> bool:\n        pass\n',
      javascript: 'var isMatch = function(s, p) {\n  \n};\n',
      java: 'class Solution {\n    public boolean isMatch(String s, String p) {\n        return false;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    bool isMatch(string s, string p) {\n        return false;\n    }\n};\n',
    },
  }),

  problem(11, 'Thùng chứa nhiều nước nhất', 'medium', ['Hai con trỏ', 'Mảng', 'Tham lam'], '54.2%', {
    description:
      'Cho một mảng số nguyên `height` có độ dài `n`. Có `n` đường thẳng đứng được vẽ sao cho hai điểm đầu của đường thứ `i` là `(i, 0)` và `(i, height[i])`.\n\nTìm hai đường thẳng tạo thành một thùng chứa với trục x để **chứa được nhiều nước nhất**. Trả về lượng nước tối đa mà thùng có thể chứa.',
    examples: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', output: '49', explain: 'Hai đường chỉ số 1 và 8, chiều cao min = 7, chiều rộng = 7, diện tích = 49.' },
      { input: 'height = [1,1]', output: '1' },
    ],
    constraints: ['n == height.length', '2 <= n <= 10^5', '0 <= height[i] <= 10^4'],
    testcases: [
      { input: 'height = [1,8,6,2,5,4,8,3,7]', expected: '49' },
      { input: 'height = [1,1]', expected: '1' },
      { input: 'height = [4,3,2,1,4]', expected: '16' },
    ],
    starter: {
      python: 'class Solution:\n    def maxArea(self, height: list[int]) -> int:\n        pass\n',
      javascript: 'var maxArea = function(height) {\n  \n};\n',
      java: 'class Solution {\n    public int maxArea(int[] height) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int maxArea(vector<int>& height) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(12, 'Số nguyên sang số La Mã', 'medium', ['Toán học', 'Chuỗi', 'Tham lam'], '62.0%', {
    description:
      'Chuyển đổi một số nguyên thành số La Mã.\n\nCác ký hiệu La Mã: `I=1, V=5, X=10, L=50, C=100, D=500, M=1000`.\n\nQuy tắc trừ: `IV=4, IX=9, XL=40, XC=90, CD=400, CM=900`.',
    examples: [
      { input: 'num = 3749', output: '"MMMDCCXLIX"' },
      { input: 'num = 58', output: '"LVIII"', explain: 'L=50, V=5, III=3.' },
      { input: 'num = 1994', output: '"MCMXCIV"', explain: 'M=1000, CM=900, XC=90, IV=4.' },
    ],
    constraints: ['1 <= num <= 3999'],
    testcases: [
      { input: 'num = 3749', expected: '"MMMDCCXLIX"' },
      { input: 'num = 58', expected: '"LVIII"' },
      { input: 'num = 1994', expected: '"MCMXCIV"' },
    ],
    starter: {
      python: 'class Solution:\n    def intToRoman(self, num: int) -> str:\n        pass\n',
      javascript: 'var intToRoman = function(num) {\n  \n};\n',
      java: 'class Solution {\n    public String intToRoman(int num) {\n        return "";\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    string intToRoman(int num) {\n        return "";\n    }\n};\n',
    },
  }),

  problem(13, 'Số La Mã sang số nguyên', 'easy', ['Toán học', 'Chuỗi'], '58.9%', {
    description:
      'Chuyển đổi một số La Mã thành số nguyên.\n\nCác ký hiệu La Mã: `I=1, V=5, X=10, L=50, C=100, D=500, M=1000`.\n\nNếu ký tự nhỏ hơn xuất hiện **trước** ký tự lớn hơn thì trừ đi (VD: `IV=4`, `IX=9`).',
    examples: [
      { input: 's = "III"', output: '3' },
      { input: 's = "LVIII"', output: '58', explain: 'L=50, V=5, III=3.' },
      { input: 's = "MCMXCIV"', output: '1994', explain: 'M=1000, CM=900, XC=90, IV=4.' },
    ],
    constraints: ['1 <= s.length <= 15', 's chỉ chứa ký tự "I","V","X","L","C","D","M".', 'Đảm bảo s là số La Mã hợp lệ trong khoảng [1, 3999].'],
    testcases: [
      { input: 's = "III"', expected: '3' },
      { input: 's = "LVIII"', expected: '58' },
      { input: 's = "MCMXCIV"', expected: '1994' },
    ],
    starter: {
      python: 'class Solution:\n    def romanToInt(self, s: str) -> int:\n        pass\n',
      javascript: 'var romanToInt = function(s) {\n  \n};\n',
      java: 'class Solution {\n    public int romanToInt(String s) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int romanToInt(string s) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(14, 'Tiền tố chung dài nhất', 'easy', ['Chuỗi'], '41.3%', {
    description:
      'Viết hàm tìm **chuỗi tiền tố chung dài nhất** trong một mảng các chuỗi.\n\nNếu không có tiền tố chung, trả về chuỗi rỗng `""`.',
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', output: '""', explain: 'Không có tiền tố chung.' },
    ],
    constraints: ['1 <= strs.length <= 200', '0 <= strs[i].length <= 200', 'strs[i] chỉ gồm chữ cái thường tiếng Anh.'],
    testcases: [
      { input: 'strs = ["flower","flow","flight"]', expected: '"fl"' },
      { input: 'strs = ["dog","racecar","car"]', expected: '""' },
      { input: 'strs = ["interview","interphone","interface"]', expected: '"inter"' },
    ],
    starter: {
      python: 'class Solution:\n    def longestCommonPrefix(self, strs: list[str]) -> str:\n        pass\n',
      javascript: 'var longestCommonPrefix = function(strs) {\n  \n};\n',
      java: 'class Solution {\n    public String longestCommonPrefix(String[] strs) {\n        return "";\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    string longestCommonPrefix(vector<string>& strs) {\n        return "";\n    }\n};\n',
    },
  }),

  problem(15, '3Sum', 'medium', ['Mảng', 'Hai con trỏ', 'Sắp xếp'], '32.5%', {
    description:
      'Cho một mảng số nguyên `nums`, hãy trả về tất cả bộ ba `[nums[i], nums[j], nums[k]]` sao cho `i != j`, `i != k`, `j != k` và `nums[i] + nums[j] + nums[k] == 0`.\n\nChú ý: Tập kết quả **không được chứa bộ ba trùng lặp**.',
    examples: [
      { input: 'nums = [-1,0,1,2,-1,-4]', output: '[[-1,-1,2],[-1,0,1]]', explain: 'Các bộ ba có tổng = 0 là [-1,-1,2] và [-1,0,1].' },
      { input: 'nums = [0,1,1]', output: '[]' },
      { input: 'nums = [0,0,0]', output: '[[0,0,0]]' },
    ],
    constraints: ['3 <= nums.length <= 3000', '-10^5 <= nums[i] <= 10^5'],
    testcases: [
      { input: 'nums = [-1,0,1,2,-1,-4]', expected: '[[-1,-1,2],[-1,0,1]]' },
      { input: 'nums = [0,1,1]', expected: '[]' },
      { input: 'nums = [0,0,0]', expected: '[[0,0,0]]' },
    ],
    starter: {
      python: 'class Solution:\n    def threeSum(self, nums: list[int]) -> list[list[int]]:\n        pass\n',
      javascript: 'var threeSum = function(nums) {\n  \n};\n',
      java: 'class Solution {\n    public List<List<Integer>> threeSum(int[] nums) {\n        return new ArrayList<>();\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    vector<vector<int>> threeSum(vector<int>& nums) {\n        return {};\n    }\n};\n',
    },
  }),

  problem(16, 'Tổ hợp chữ cái từ bàn phím số', 'medium', ['Chuỗi', 'Quay lui'], '57.4%', {
    description:
      'Cho chuỗi chứa các chữ số `2-9`, hãy trả về tất cả các tổ hợp chữ cái có thể có theo bàn phím điện thoại.\n\nÁnh xạ: `2→abc, 3→def, 4→ghi, 5→jkl, 6→mno, 7→pqrs, 8→tuv, 9→wxyz`.\n\nKết quả có thể trả về theo bất kỳ thứ tự nào.',
    examples: [
      { input: 'digits = "23"', output: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: 'digits = ""', output: '[]' },
      { input: 'digits = "2"', output: '["a","b","c"]' },
    ],
    constraints: ['0 <= digits.length <= 4', 'digits[i] là chữ số trong khoảng [\'2\', \'9\'].'],
    testcases: [
      { input: 'digits = "23"', expected: '["ad","ae","af","bd","be","bf","cd","ce","cf"]' },
      { input: 'digits = ""', expected: '[]' },
      { input: 'digits = "2"', expected: '["a","b","c"]' },
    ],
    starter: {
      python: 'class Solution:\n    def letterCombinations(self, digits: str) -> list[str]:\n        pass\n',
      javascript: 'var letterCombinations = function(digits) {\n  \n};\n',
      java: 'class Solution {\n    public List<String> letterCombinations(String digits) {\n        return new ArrayList<>();\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    vector<string> letterCombinations(string digits) {\n        return {};\n    }\n};\n',
    },
  }),

  problem(17, 'Dấu ngoặc hợp lệ', 'easy', ['Chuỗi', 'Ngăn xếp'], '40.7%', {
    description:
      'Cho chuỗi `s` chỉ gồm các ký tự `"("`, `")"`, `"{"`, `"}"`, `"["`, `"]"`, hãy xác định xem chuỗi đầu vào có **hợp lệ** hay không.\n\nMột chuỗi hợp lệ khi:\n1. Dấu ngoặc mở phải đóng bằng đúng loại.\n2. Dấu ngoặc mở phải đóng theo đúng thứ tự.\n3. Mỗi dấu đóng có một dấu mở tương ứng.',
    examples: [
      { input: 's = "()"', output: 'true' },
      { input: 's = "()[]{}"', output: 'true' },
      { input: 's = "(]"', output: 'false' },
      { input: 's = "([])"', output: 'true' },
    ],
    constraints: ['1 <= s.length <= 10^4', 's chỉ gồm dấu ngoặc "()[]{}"'],
    testcases: [
      { input: 's = "()"', expected: 'true' },
      { input: 's = "()[]{}"', expected: 'true' },
      { input: 's = "(]"', expected: 'false' },
      { input: 's = "([])"', expected: 'true' },
    ],
    starter: {
      python: 'class Solution:\n    def isValid(self, s: str) -> bool:\n        pass\n',
      javascript: 'var isValid = function(s) {\n  \n};\n',
      java: 'class Solution {\n    public boolean isValid(String s) {\n        return false;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    bool isValid(string s) {\n        return false;\n    }\n};\n',
    },
  }),

  problem(18, 'Gộp hai danh sách đã sắp xếp', 'easy', ['Danh sách liên kết', 'Đệ quy'], '62.8%', {
    description:
      'Cho hai đầu của danh sách liên kết đã được sắp xếp `list1` và `list2`, hãy **gộp** chúng thành một danh sách liên kết đã sắp xếp và trả về đầu của danh sách kết quả.\n\nDanh sách được tạo bằng cách nối các nút từ hai danh sách ban đầu.',
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1,1,2,3,4,4]' },
      { input: 'list1 = [], list2 = []', output: '[]' },
      { input: 'list1 = [], list2 = [0]', output: '[0]' },
    ],
    constraints: [
      'Số nút trong cả hai danh sách nằm trong [0, 50].',
      '-100 <= Node.val <= 100',
      'Cả hai danh sách đều được sắp xếp không giảm.',
    ],
    testcases: [
      { input: 'list1 = [1,2,4]\nlist2 = [1,3,4]', expected: '[1,1,2,3,4,4]' },
      { input: 'list1 = []\nlist2 = []', expected: '[]' },
      { input: 'list1 = []\nlist2 = [0]', expected: '[0]' },
    ],
    starter: {
      python: 'class Solution:\n    def mergeTwoLists(self, list1, list2):\n        pass\n',
      javascript: 'var mergeTwoLists = function(list1, list2) {\n  \n};\n',
      java: 'class Solution {\n    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n        return null;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {\n        return nullptr;\n    }\n};\n',
    },
  }),

  problem(19, 'Sinh dấu ngoặc', 'medium', ['Chuỗi', 'Quy hoạch động', 'Quay lui'], '73.1%', {
    description:
      'Cho số nguyên `n` là số cặp dấu ngoặc, hãy sinh ra tất cả các tổ hợp dấu ngoặc **hợp lệ**.',
    examples: [
      { input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: 'n = 1', output: '["()"]' },
    ],
    constraints: ['1 <= n <= 8'],
    testcases: [
      { input: 'n = 3', expected: '["((()))","(()())","(())()","()(())","()()()"]' },
      { input: 'n = 1', expected: '["()"]' },
      { input: 'n = 2', expected: '["(())","()()"]' },
    ],
    starter: {
      python: 'class Solution:\n    def generateParenthesis(self, n: int) -> list[str]:\n        pass\n',
      javascript: 'var generateParenthesis = function(n) {\n  \n};\n',
      java: 'class Solution {\n    public List<String> generateParenthesis(int n) {\n        return new ArrayList<>();\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    vector<string> generateParenthesis(int n) {\n        return {};\n    }\n};\n',
    },
  }),

  problem(20, 'Gộp k danh sách đã sắp xếp', 'hard', ['Danh sách liên kết', 'Heap', 'Chia để trị'], '48.2%', {
    description:
      'Cho mảng `lists` gồm `k` danh sách liên kết đã sắp xếp tăng dần, hãy **gộp tất cả** thành một danh sách liên kết duy nhất và trả về.',
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]' },
      { input: 'lists = []', output: '[]' },
      { input: 'lists = [[]]', output: '[]' },
    ],
    constraints: ['k == lists.length', '0 <= k <= 10^4', '0 <= lists[i].length <= 500', '-10^4 <= lists[i][j] <= 10^4', 'Mỗi lists[i] được sắp xếp tăng dần.', 'Tổng số nút trong tất cả các danh sách không vượt quá 10^4.'],
    testcases: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', expected: '[1,1,2,3,4,4,5,6]' },
      { input: 'lists = []', expected: '[]' },
      { input: 'lists = [[]]', expected: '[]' },
    ],
    starter: {
      python: 'class Solution:\n    def mergeKLists(self, lists):\n        pass\n',
      javascript: 'var mergeKLists = function(lists) {\n  \n};\n',
      java: 'class Solution {\n    public ListNode mergeKLists(ListNode[] lists) {\n        return null;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    ListNode* mergeKLists(vector<ListNode*>& lists) {\n        return nullptr;\n    }\n};\n',
    },
  }),

  problem(21, 'Tìm trong mảng xoay đã sắp xếp', 'medium', ['Mảng', 'Tìm kiếm nhị phân'], '38.5%', {
    description:
      'Cho mảng số nguyên `nums` đã sắp xếp tăng dần và **có thể bị xoay** tại một điểm nào đó. Cho số nguyên `target`, trả về **chỉ số** của `target` nếu tìm thấy, ngược lại trả về `-1`.\n\nBạn phải viết thuật toán có độ phức tạp thời gian `O(log n)`.',
    examples: [
      { input: 'nums = [4,5,6,7,0,1,2], target = 0', output: '4' },
      { input: 'nums = [4,5,6,7,0,1,2], target = 3', output: '-1' },
      { input: 'nums = [1], target = 0', output: '-1' },
    ],
    constraints: ['1 <= nums.length <= 5000', '-10^4 <= nums[i] <= 10^4', 'Tất cả giá trị trong nums là duy nhất.', 'nums là mảng tăng dần có thể bị xoay.', '-10^4 <= target <= 10^4'],
    testcases: [
      { input: 'nums = [4,5,6,7,0,1,2]\ntarget = 0', expected: '4' },
      { input: 'nums = [4,5,6,7,0,1,2]\ntarget = 3', expected: '-1' },
      { input: 'nums = [1]\ntarget = 0', expected: '-1' },
    ],
    starter: {
      python: 'class Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        pass\n',
      javascript: 'var search = function(nums, target) {\n  \n};\n',
      java: 'class Solution {\n    public int search(int[] nums, int target) {\n        return -1;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        return -1;\n    }\n};\n',
    },
  }),

  problem(22, 'Tìm vị trí đầu và cuối', 'medium', ['Mảng', 'Tìm kiếm nhị phân'], '41.7%', {
    description:
      'Cho mảng số nguyên `nums` đã sắp xếp tăng dần và một `target`, hãy tìm **vị trí bắt đầu và kết thúc** của `target` trong mảng.\n\nNếu `target` không có trong mảng, trả về `[-1, -1]`.\n\nYêu cầu độ phức tạp `O(log n)`.',
    examples: [
      { input: 'nums = [5,7,7,8,8,10], target = 8', output: '[3,4]' },
      { input: 'nums = [5,7,7,8,8,10], target = 6', output: '[-1,-1]' },
      { input: 'nums = [], target = 0', output: '[-1,-1]' },
    ],
    constraints: ['0 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9', 'nums là mảng không giảm.', '-10^9 <= target <= 10^9'],
    testcases: [
      { input: 'nums = [5,7,7,8,8,10]\ntarget = 8', expected: '[3,4]' },
      { input: 'nums = [5,7,7,8,8,10]\ntarget = 6', expected: '[-1,-1]' },
      { input: 'nums = []\ntarget = 0', expected: '[-1,-1]' },
    ],
    starter: {
      python: 'class Solution:\n    def searchRange(self, nums: list[int], target: int) -> list[int]:\n        pass\n',
      javascript: 'var searchRange = function(nums, target) {\n  \n};\n',
      java: 'class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        return new int[]{-1,-1};\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    vector<int> searchRange(vector<int>& nums, int target) {\n        return {-1,-1};\n    }\n};\n',
    },
  }),

  problem(23, 'Leo cầu thang', 'easy', ['Quy hoạch động', 'Ghi nhớ hóa', 'Toán học'], '51.8%', {
    description:
      'Bạn đang leo lên một cầu thang. Cần `n` bước để lên đến đỉnh.\n\nMỗi lần bạn có thể leo **1 hoặc 2 bậc**. Có bao nhiêu cách để bạn leo lên đến đỉnh?',
    examples: [
      { input: 'n = 2', output: '2', explain: '2 cách: {1,1} và {2}.' },
      { input: 'n = 3', output: '3', explain: '3 cách: {1,1,1}, {1,2} và {2,1}.' },
    ],
    constraints: ['1 <= n <= 45'],
    testcases: [
      { input: 'n = 2', expected: '2' },
      { input: 'n = 3', expected: '3' },
      { input: 'n = 10', expected: '89' },
      { input: 'n = 1', expected: '1' },
    ],
    starter: {
      python: 'class Solution:\n    def climbStairs(self, n: int) -> int:\n        pass\n',
      javascript: 'var climbStairs = function(n) {\n  \n};\n',
      java: 'class Solution {\n    public int climbStairs(int n) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int climbStairs(int n) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(24, 'Duyệt trung thứ tự cây nhị phân', 'easy', ['Cây', 'DFS', 'Duyệt cây'], '74.5%', {
    description:
      'Cho `root` của cây nhị phân, hãy trả về danh sách các giá trị nút theo **thứ tự trung thứ tự (inorder traversal)**.\n\nInorder traversal: duyệt cây con trái → thăm nút → duyệt cây con phải.',
    examples: [
      { input: 'root = [1,null,2,3]', output: '[1,3,2]' },
      { input: 'root = [1,2,3,4,5,null,8,null,null,6,7,9]', output: '[4,2,6,5,7,1,3,9,8]' },
      { input: 'root = []', output: '[]' },
      { input: 'root = [1]', output: '[1]' },
    ],
    constraints: ['Số nút trong cây nằm trong [0, 100].', '-100 <= Node.val <= 100'],
    testcases: [
      { input: 'root = [1,null,2,3]', expected: '[1,3,2]' },
      { input: 'root = []', expected: '[]' },
      { input: 'root = [1]', expected: '[1]' },
    ],
    starter: {
      python: 'class Solution:\n    def inorderTraversal(self, root) -> list[int]:\n        pass\n',
      javascript: 'var inorderTraversal = function(root) {\n  \n};\n',
      java: 'class Solution {\n    public List<Integer> inorderTraversal(TreeNode root) {\n        return new ArrayList<>();\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    vector<int> inorderTraversal(TreeNode* root) {\n        return {};\n    }\n};\n',
    },
  }),

  problem(25, 'Cây đối xứng', 'easy', ['Cây', 'BFS', 'DFS', 'Đệ quy'], '53.2%', {
    description:
      'Cho `root` của cây nhị phân, kiểm tra xem nó có **đối xứng qua tâm** (mirror of itself) hay không.\n\nMột cây là đối xứng nếu cây con trái là ảnh gương của cây con phải.',
    examples: [
      { input: 'root = [1,2,2,3,4,4,3]', output: 'true' },
      { input: 'root = [1,2,2,null,3,null,3]', output: 'false' },
    ],
    constraints: ['Số nút trong cây nằm trong [1, 1000].', '-100 <= Node.val <= 100'],
    testcases: [
      { input: 'root = [1,2,2,3,4,4,3]', expected: 'true' },
      { input: 'root = [1,2,2,null,3,null,3]', expected: 'false' },
      { input: 'root = [1]', expected: 'true' },
    ],
    starter: {
      python: 'class Solution:\n    def isSymmetric(self, root) -> bool:\n        pass\n',
      javascript: 'var isSymmetric = function(root) {\n  \n};\n',
      java: 'class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        return false;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    bool isSymmetric(TreeNode* root) {\n        return false;\n    }\n};\n',
    },
  }),

  problem(26, 'Độ sâu lớn nhất của cây nhị phân', 'easy', ['Cây', 'DFS', 'BFS', 'Đệ quy'], '73.9%', {
    description:
      'Cho `root` của cây nhị phân, trả về **độ sâu lớn nhất** của nó.\n\nĐộ sâu lớn nhất là số nút dọc theo đường đi dài nhất từ nút gốc đến nút lá xa nhất.',
    examples: [
      { input: 'root = [3,9,20,null,null,15,7]', output: '3' },
      { input: 'root = [1,null,2]', output: '2' },
    ],
    constraints: ['Số nút trong cây nằm trong [0, 10^4].', '-100 <= Node.val <= 100'],
    testcases: [
      { input: 'root = [3,9,20,null,null,15,7]', expected: '3' },
      { input: 'root = [1,null,2]', expected: '2' },
      { input: 'root = []', expected: '0' },
    ],
    starter: {
      python: 'class Solution:\n    def maxDepth(self, root) -> int:\n        pass\n',
      javascript: 'var maxDepth = function(root) {\n  \n};\n',
      java: 'class Solution {\n    public int maxDepth(TreeNode root) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int maxDepth(TreeNode* root) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(27, 'Thời điểm tốt nhất để mua và bán cổ phiếu', 'easy', ['Mảng', 'Quy hoạch động'], '54.4%', {
    description:
      'Cho mảng `prices` trong đó `prices[i]` là giá cổ phiếu vào ngày thứ `i`.\n\nBạn muốn **tối đa hóa lợi nhuận** bằng cách chọn **một ngày mua** và **một ngày bán sau đó**.\n\nTrả về lợi nhuận tối đa bạn đạt được. Nếu không có lợi nhuận, trả về `0`.',
    examples: [
      { input: 'prices = [7,1,5,3,6,4]', output: '5', explain: 'Mua ngày 2 (giá=1), bán ngày 5 (giá=6), lợi nhuận = 6-1 = 5.' },
      { input: 'prices = [7,6,4,3,1]', output: '0', explain: 'Giá chỉ giảm, không có lợi nhuận.' },
    ],
    constraints: ['1 <= prices.length <= 10^5', '0 <= prices[i] <= 10^4'],
    testcases: [
      { input: 'prices = [7,1,5,3,6,4]', expected: '5' },
      { input: 'prices = [7,6,4,3,1]', expected: '0' },
      { input: 'prices = [2,4,1]', expected: '2' },
    ],
    starter: {
      python: 'class Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        pass\n',
      javascript: 'var maxProfit = function(prices) {\n  \n};\n',
      java: 'class Solution {\n    public int maxProfit(int[] prices) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(28, 'Số xuất hiện đơn lẻ', 'easy', ['Mảng', 'Thao tác bit'], '70.2%', {
    description:
      'Cho mảng số nguyên không rỗng `nums`, mỗi phần tử đều xuất hiện **hai lần** ngoại trừ một phần tử xuất hiện **đúng một lần**. Hãy tìm phần tử đó.\n\nYêu cầu: Độ phức tạp thời gian `O(n)` và không gian `O(1)`.',
    examples: [
      { input: 'nums = [2,2,1]', output: '1' },
      { input: 'nums = [4,1,2,1,2]', output: '4' },
      { input: 'nums = [1]', output: '1' },
    ],
    constraints: ['1 <= nums.length <= 3 * 10^4', '-3 * 10^4 <= nums[i] <= 3 * 10^4', 'Mỗi phần tử xuất hiện đúng hai lần, ngoại trừ một phần tử xuất hiện đúng một lần.'],
    testcases: [
      { input: 'nums = [2,2,1]', expected: '1' },
      { input: 'nums = [4,1,2,1,2]', expected: '4' },
      { input: 'nums = [1]', expected: '1' },
    ],
    starter: {
      python: 'class Solution:\n    def singleNumber(self, nums: list[int]) -> int:\n        pass\n',
      javascript: 'var singleNumber = function(nums) {\n  \n};\n',
      java: 'class Solution {\n    public int singleNumber(int[] nums) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int singleNumber(vector<int>& nums) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(29, 'Chu trình trong danh sách liên kết', 'easy', ['Danh sách liên kết', 'Hai con trỏ', 'Bảng băm'], '45.9%', {
    description:
      'Cho `head` của danh sách liên kết, xác định xem danh sách có **chu trình** hay không.\n\nCó chu trình nếu tồn tại một nút có thể đến được liên tục bằng cách đi theo con trỏ `next`. `pos` biểu thị vị trí (0-indexed) mà đuôi kết nối vào (giá trị `-1` nghĩa là không có chu trình).',
    examples: [
      { input: 'head = [3,2,0,-4], pos = 1', output: 'true', explain: 'Có chu trình, đuôi kết nối vào nút chỉ số 1.' },
      { input: 'head = [1,2], pos = 0', output: 'true' },
      { input: 'head = [1], pos = -1', output: 'false' },
    ],
    constraints: ['Số nút trong danh sách nằm trong [0, 10^4].', '-10^5 <= Node.val <= 10^5', 'pos là -1 hoặc chỉ số hợp lệ.'],
    testcases: [
      { input: 'head = [3,2,0,-4]\npos = 1', expected: 'true' },
      { input: 'head = [1,2]\npos = 0', expected: 'true' },
      { input: 'head = [1]\npos = -1', expected: 'false' },
    ],
    starter: {
      python: 'class Solution:\n    def hasCycle(self, head) -> bool:\n        pass\n',
      javascript: 'var hasCycle = function(head) {\n  \n};\n',
      java: 'class Solution {\n    public boolean hasCycle(ListNode head) {\n        return false;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    bool hasCycle(ListNode *head) {\n        return false;\n    }\n};\n',
    },
  }),

  problem(30, 'Ngăn xếp lấy nhỏ nhất', 'medium', ['Ngăn xếp', 'Thiết kế'], '51.7%', {
    description:
      'Thiết kế ngăn xếp hỗ trợ push, pop, top và lấy **phần tử nhỏ nhất** trong thời gian `O(1)`.\n\nCài đặt lớp `MinStack`:\n- `MinStack()` khởi tạo ngăn xếp.\n- `void push(int val)` đẩy `val` vào ngăn xếp.\n- `void pop()` xóa phần tử trên cùng.\n- `int top()` lấy phần tử trên cùng.\n- `int getMin()` truy xuất phần tử nhỏ nhất.',
    examples: [
      {
        input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]',
        output: '[null,null,null,null,-3,null,0,-2]',
      },
    ],
    constraints: ['-2^31 <= val <= 2^31 - 1', 'Các phương thức pop, top và getMin luôn được gọi trên ngăn xếp không rỗng.', 'Tối đa 3 * 10^4 lời gọi hàm.'],
    testcases: [
      {
        input: 'ops = ["MinStack","push","push","push","getMin","pop","top","getMin"]\nvals = [[],[-2],[0],[-3],[],[],[],[]]',
        expected: '[null,null,null,null,-3,null,0,-2]',
      },
    ],
    starter: {
      python: 'class MinStack:\n    def __init__(self):\n        pass\n\n    def push(self, val: int) -> None:\n        pass\n\n    def pop(self) -> None:\n        pass\n\n    def top(self) -> int:\n        pass\n\n    def getMin(self) -> int:\n        pass\n',
      javascript: 'var MinStack = function() {\n  \n};\nMinStack.prototype.push = function(val) {};\nMinStack.prototype.pop = function() {};\nMinStack.prototype.top = function() {};\nMinStack.prototype.getMin = function() {};\n',
      java: 'class MinStack {\n    public MinStack() {}\n    public void push(int val) {}\n    public void pop() {}\n    public int top() { return 0; }\n    public int getMin() { return 0; }\n}\n',
      cpp: 'class MinStack {\npublic:\n    MinStack() {}\n    void push(int val) {}\n    void pop() {}\n    int top() { return 0; }\n    int getMin() { return 0; }\n};\n',
    },
  }),

  problem(31, 'Giao điểm của hai danh sách liên kết', 'easy', ['Danh sách liên kết', 'Bảng băm', 'Hai con trỏ'], '55.1%', {
    description:
      'Cho đầu của hai danh sách liên kết đơn `headA` và `headB`, trả về **nút giao điểm** nơi hai danh sách bắt đầu giao nhau. Nếu không có giao điểm, trả về `null`.\n\nLưu ý: Các danh sách **không thay đổi**, và mỗi hệ thống bộ nhớ xác định duy nhất một node.',
    examples: [
      { input: 'intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3', output: 'Intersected at "8"' },
      { input: 'intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1', output: 'Intersected at "2"' },
      { input: 'intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2', output: 'No intersection' },
    ],
    constraints: ['Số nút trong listA nằm trong [1, 3 * 10^4].', 'Số nút trong listB nằm trong [1, 3 * 10^4].', '-10^5 <= Node.val <= 10^5', '0 <= skipA <= m', '0 <= skipB <= n'],
    testcases: [
      { input: 'listA = [4,1,8,4,5]\nlistB = [5,6,1,8,4,5]\nintersectVal = 8', expected: 'Intersected at "8"' },
      { input: 'listA = [2,6,4]\nlistB = [1,5]\nintersectVal = 0', expected: 'null' },
    ],
    starter: {
      python: 'class Solution:\n    def getIntersectionNode(self, headA, headB):\n        pass\n',
      javascript: 'var getIntersectionNode = function(headA, headB) {\n  \n};\n',
      java: 'class Solution {\n    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n        return null;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {\n        return nullptr;\n    }\n};\n',
    },
  }),

  problem(32, 'Phần tử chiếm đa số', 'easy', ['Mảng', 'Bảng băm', 'Sắp xếp', 'Thuật toán Boyer-Moore'], '63.4%', {
    description:
      'Cho mảng `nums` có kích thước `n`, hãy trả về **phần tử đa số** — phần tử xuất hiện nhiều hơn `⌊n / 2⌋` lần.\n\nBạn có thể giả định rằng phần tử đa số luôn tồn tại trong mảng.',
    examples: [
      { input: 'nums = [3,2,3]', output: '3' },
      { input: 'nums = [2,2,1,1,1,2,2]', output: '2' },
    ],
    constraints: ['n == nums.length', '1 <= n <= 5 * 10^4', '-10^9 <= nums[i] <= 10^9'],
    testcases: [
      { input: 'nums = [3,2,3]', expected: '3' },
      { input: 'nums = [2,2,1,1,1,2,2]', expected: '2' },
      { input: 'nums = [1]', expected: '1' },
    ],
    starter: {
      python: 'class Solution:\n    def majorityElement(self, nums: list[int]) -> int:\n        pass\n',
      javascript: 'var majorityElement = function(nums) {\n  \n};\n',
      java: 'class Solution {\n    public int majorityElement(int[] nums) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int majorityElement(vector<int>& nums) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(33, 'Tên trộm đột nhập', 'medium', ['Mảng', 'Quy hoạch động'], '49.8%', {
    description:
      'Bạn là một tên trộm dự định cướp nhà dọc theo phố. Mỗi nhà có một lượng tiền nhất định. Tuy nhiên, **các nhà liền kề có hệ thống an ninh kết nối với nhau** — nếu cướp hai nhà liền kề trong cùng một đêm sẽ tự động báo cảnh sát.\n\nCho mảng số nguyên `nums` biểu diễn số tiền ở mỗi nhà, hãy trả về **số tiền tối đa** bạn có thể cướp mà không báo động cảnh sát.',
    examples: [
      { input: 'nums = [1,2,3,1]', output: '4', explain: 'Cướp nhà 1 (1) rồi nhà 3 (3). Tổng = 1 + 3 = 4.' },
      { input: 'nums = [2,7,9,3,1]', output: '12', explain: 'Cướp nhà 1 (2), nhà 3 (9), nhà 5 (1). Tổng = 2+9+1 = 12.' },
    ],
    constraints: ['1 <= nums.length <= 100', '0 <= nums[i] <= 400'],
    testcases: [
      { input: 'nums = [1,2,3,1]', expected: '4' },
      { input: 'nums = [2,7,9,3,1]', expected: '12' },
      { input: 'nums = [2,1,1,2]', expected: '4' },
    ],
    starter: {
      python: 'class Solution:\n    def rob(self, nums: list[int]) -> int:\n        pass\n',
      javascript: 'var rob = function(nums) {\n  \n};\n',
      java: 'class Solution {\n    public int rob(int[] nums) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int rob(vector<int>& nums) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(34, 'Đảo ngược danh sách liên kết', 'easy', ['Danh sách liên kết', 'Đệ quy'], '73.1%', {
    description:
      'Cho `head` của danh sách liên kết đơn, hãy **đảo ngược** danh sách và trả về đầu mới.',
    examples: [
      { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
      { input: 'head = [1,2]', output: '[2,1]' },
      { input: 'head = []', output: '[]' },
    ],
    constraints: ['Số nút nằm trong [0, 5000].', '-5000 <= Node.val <= 5000'],
    testcases: [
      { input: 'head = [1,2,3,4,5]', expected: '[5,4,3,2,1]' },
      { input: 'head = [1,2]', expected: '[2,1]' },
      { input: 'head = []', expected: '[]' },
    ],
    starter: {
      python: 'class Solution:\n    def reverseList(self, head):\n        pass\n',
      javascript: 'var reverseList = function(head) {\n  \n};\n',
      java: 'class Solution {\n    public ListNode reverseList(ListNode head) {\n        return null;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        return nullptr;\n    }\n};\n',
    },
  }),

  problem(35, 'Lịch học phần', 'medium', ['Đồ thị', 'Sắp xếp topo', 'DFS', 'BFS'], '46.0%', {
    description:
      'Có `numCourses` khóa học, đánh số từ `0` đến `numCourses - 1`. Cho mảng `prerequisites` trong đó `prerequisites[i] = [ai, bi]` nghĩa là bạn phải học `bi` **trước** khi học `ai`.\n\nTrả về `true` nếu bạn có thể **hoàn thành tất cả các khóa học**.',
    examples: [
      { input: 'numCourses = 2, prerequisites = [[1,0]]', output: 'true', explain: 'Học 0 trước rồi học 1.' },
      { input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', output: 'false', explain: 'Có chu trình, không thể hoàn thành.' },
    ],
    constraints: ['1 <= numCourses <= 2000', '0 <= prerequisites.length <= 5000', 'prerequisites[i].length == 2', '0 <= ai, bi < numCourses', 'Tất cả các cặp prerequisites[i] là duy nhất.'],
    testcases: [
      { input: 'numCourses = 2\nprerequisites = [[1,0]]', expected: 'true' },
      { input: 'numCourses = 2\nprerequisites = [[1,0],[0,1]]', expected: 'false' },
      { input: 'numCourses = 1\nprerequisites = []', expected: 'true' },
    ],
    starter: {
      python: 'class Solution:\n    def canFinish(self, numCourses: int, prerequisites: list[list[int]]) -> bool:\n        pass\n',
      javascript: 'var canFinish = function(numCourses, prerequisites) {\n  \n};\n',
      java: 'class Solution {\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        return false;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        return false;\n    }\n};\n',
    },
  }),

  problem(36, 'Cài đặt Trie', 'medium', ['Thiết kế', 'Trie', 'Chuỗi'], '62.3%', {
    description:
      'Trie (hay tiền tố cây) là một cấu trúc dữ liệu dạng cây dùng để lưu trữ và tìm kiếm chuỗi hiệu quả.\n\nCài đặt lớp `Trie`:\n- `Trie()` khởi tạo trie.\n- `void insert(String word)` chèn `word` vào trie.\n- `boolean search(String word)` trả về `true` nếu `word` tồn tại trong trie.\n- `boolean startsWith(String prefix)` trả về `true` nếu có từ trong trie bắt đầu bằng `prefix`.',
    examples: [
      {
        input: '["Trie","insert","search","search","startsWith","insert","search"]\n[[],["apple"],["apple"],["app"],["app"],["app"],["app"]]',
        output: '[null,null,true,false,true,null,true]',
      },
    ],
    constraints: ['1 <= word.length, prefix.length <= 2000', 'word và prefix chỉ chứa chữ thường tiếng Anh.', 'Tối đa 3 * 10^4 lời gọi insert, search và startsWith.'],
    testcases: [
      {
        input: 'ops = ["Trie","insert","search","search","startsWith","insert","search"]\nvals = [[],["apple"],["apple"],["app"],["app"],["app"],["app"]]',
        expected: '[null,null,true,false,true,null,true]',
      },
    ],
    starter: {
      python: 'class Trie:\n    def __init__(self):\n        pass\n\n    def insert(self, word: str) -> None:\n        pass\n\n    def search(self, word: str) -> bool:\n        pass\n\n    def startsWith(self, prefix: str) -> bool:\n        pass\n',
      javascript: 'var Trie = function() {};\nTrie.prototype.insert = function(word) {};\nTrie.prototype.search = function(word) { return false; };\nTrie.prototype.startsWith = function(prefix) { return false; };\n',
      java: 'class Trie {\n    public Trie() {}\n    public void insert(String word) {}\n    public boolean search(String word) { return false; }\n    public boolean startsWith(String prefix) { return false; }\n}\n',
      cpp: 'class Trie {\npublic:\n    Trie() {}\n    void insert(string word) {}\n    bool search(string word) { return false; }\n    bool startsWith(string prefix) { return false; }\n};\n',
    },
  }),

  problem(37, 'Phần tử lớn thứ k', 'medium', ['Mảng', 'Heap', 'Sắp xếp', 'Quickselect'], '65.3%', {
    description:
      'Cho mảng số nguyên `nums` và số nguyên `k`, hãy trả về **phần tử lớn thứ `k`** trong mảng đã sắp xếp.\n\nLưu ý: Phần tử lớn thứ `k` trong thứ tự sắp xếp, không phải phần tử duy nhất thứ `k`.',
    examples: [
      { input: 'nums = [3,2,1,5,6,4], k = 2', output: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4', output: '4' },
    ],
    constraints: ['1 <= k <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    testcases: [
      { input: 'nums = [3,2,1,5,6,4]\nk = 2', expected: '5' },
      { input: 'nums = [3,2,3,1,2,4,5,5,6]\nk = 4', expected: '4' },
      { input: 'nums = [1]\nk = 1', expected: '1' },
    ],
    starter: {
      python: 'class Solution:\n    def findKthLargest(self, nums: list[int], k: int) -> int:\n        pass\n',
      javascript: 'var findKthLargest = function(nums, k) {\n  \n};\n',
      java: 'class Solution {\n    public int findKthLargest(int[] nums, int k) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(38, 'Số lượng hòn đảo', 'medium', ['Mảng', 'BFS', 'DFS', 'Union-Find'], '56.7%', {
    description:
      'Cho lưới `m x n` gồm các ký tự `"1"` (đất liền) và `"0"` (nước), hãy đếm **số lượng hòn đảo**.\n\nMột hòn đảo được bao quanh bởi nước và được tạo thành bằng cách kết nối các đất liền liền kề theo chiều ngang hoặc dọc. Bạn có thể giả định bốn cạnh của lưới đều là nước.',
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: '1',
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: '3',
      },
    ],
    constraints: ['m == grid.length', 'n == grid[i].length', '1 <= m, n <= 300', 'grid[i][j] là "0" hoặc "1".'],
    testcases: [
      { input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', expected: '1' },
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', expected: '3' },
    ],
    starter: {
      python: 'class Solution:\n    def numIslands(self, grid: list[list[str]]) -> int:\n        pass\n',
      javascript: 'var numIslands = function(grid) {\n  \n};\n',
      java: 'class Solution {\n    public int numIslands(char[][] grid) {\n        return 0;\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        return 0;\n    }\n};\n',
    },
  }),

  problem(39, 'Tích của mảng trừ chính nó', 'medium', ['Mảng', 'Tiền tố tổng'], '64.5%', {
    description:
      'Cho mảng số nguyên `nums`, hãy trả về mảng `answer` sao cho `answer[i]` bằng **tích của tất cả phần tử trong `nums` ngoại trừ `nums[i]`**.\n\nTích của bất kỳ tiền tố hoặc hậu tố nào của `nums` đều đảm bảo vừa với số nguyên 32-bit.\n\n**Yêu cầu**: Không được dùng phép chia và độ phức tạp `O(n)`.',
    examples: [
      { input: 'nums = [1,2,3,4]', output: '[24,12,8,6]' },
      { input: 'nums = [-1,1,0,-3,3]', output: '[0,0,9,0,0]' },
    ],
    constraints: ['2 <= nums.length <= 10^5', '-30 <= nums[i] <= 30', 'Đảm bảo tích của bất kỳ tiền tố hoặc hậu tố nào đều vừa với số nguyên 32-bit.'],
    testcases: [
      { input: 'nums = [1,2,3,4]', expected: '[24,12,8,6]' },
      { input: 'nums = [-1,1,0,-3,3]', expected: '[0,0,9,0,0]' },
      { input: 'nums = [2,3,4,5]', expected: '[60,40,30,24]' },
    ],
    starter: {
      python: 'class Solution:\n    def productExceptSelf(self, nums: list[int]) -> list[int]:\n        pass\n',
      javascript: 'var productExceptSelf = function(nums) {\n  \n};\n',
      java: 'class Solution {\n    public int[] productExceptSelf(int[] nums) {\n        return new int[]{};\n    }\n}\n',
      cpp: 'class Solution {\npublic:\n    vector<int> productExceptSelf(vector<int>& nums) {\n        return {};\n    }\n};\n',
    },
  }),

  problem(40, 'Tìm trung vị từ luồng dữ liệu', 'hard', ['Heap', 'Thiết kế', 'Sắp xếp', 'Cửa sổ trượt'], '51.9%', {
    description:
      'Trung vị là giá trị ở giữa trong danh sách đã sắp xếp. Nếu có **số chẵn** phần tử, trung vị là trung bình của hai phần tử giữa.\n\nCài đặt lớp `MedianFinder`:\n- `MedianFinder()` khởi tạo đối tượng.\n- `void addNum(int num)` thêm số nguyên `num` từ luồng dữ liệu vào cấu trúc dữ liệu.\n- `double findMedian()` trả về trung vị của tất cả các phần tử đã thêm cho đến nay.',
    examples: [
      {
        input: '["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\n[[],[1],[2],[],[3],[]]',
        output: '[null,null,null,1.5,null,2.0]',
        explain: 'Sau [1,2]: trung vị = (1+2)/2 = 1.5. Sau [1,2,3]: trung vị = 2.0.',
      },
    ],
    constraints: ['-10^5 <= num <= 10^5', 'Luôn có ít nhất một phần tử trước khi gọi findMedian.', 'Tối đa 5 * 10^4 lời gọi addNum và findMedian.'],
    testcases: [
      {
        input: 'ops = ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]\nvals = [[],[1],[2],[],[3],[]]',
        expected: '[null,null,null,1.5,null,2.0]',
      },
    ],
    starter: {
      python: 'class MedianFinder:\n    def __init__(self):\n        pass\n\n    def addNum(self, num: int) -> None:\n        pass\n\n    def findMedian(self) -> float:\n        pass\n',
      javascript: 'var MedianFinder = function() {};\nMedianFinder.prototype.addNum = function(num) {};\nMedianFinder.prototype.findMedian = function() { return 0.0; };\n',
      java: 'class MedianFinder {\n    public MedianFinder() {}\n    public void addNum(int num) {}\n    public double findMedian() { return 0.0; }\n}\n',
      cpp: 'class MedianFinder {\npublic:\n    MedianFinder() {}\n    void addNum(int num) {}\n    double findMedian() { return 0.0; }\n};\n',
    },
  }),
];