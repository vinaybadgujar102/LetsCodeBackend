/**
 * Helper to build language stubs with a consistent start / user / end pattern.
 * Submission wraps: startSnippet + userCode + endSnippet
 */

function stubs({
  pythonStart,
  pythonUser,
  pythonEnd,
  javaStart,
  javaUser,
  javaEnd,
  cppStart,
  cppUser,
  cppEnd,
}) {
  return [
    {
      language: "PYTHON",
      startSnippet: pythonStart,
      userSnippet: pythonUser,
      endSnippet: pythonEnd,
    },
    {
      language: "JAVA",
      startSnippet: javaStart,
      userSnippet: javaUser,
      endSnippet: javaEnd,
    },
    {
      language: "CPP",
      startSnippet: cppStart,
      userSnippet: cppUser,
      endSnippet: cppEnd,
    },
  ];
}

const problems = [
  {
    title: "Sum of Two Numbers",
    difficulty: "easy",
    description: `## Sum of Two Numbers

Given two integers \`a\` and \`b\`, return their sum.

### Input Format
- A single line containing two space-separated integers \`a\` and \`b\`.

### Output Format
- Print a single integer — the sum of \`a\` and \`b\`.

### Example
\`\`\`
Input:
2 3

Output:
5
\`\`\`

### Constraints
- \`-10^9 <= a, b <= 10^9\`
`,
    editorial:
      "Simply return `a + b`. Watch out for large values if you use a fixed-width integer type.",
    testCases: [
      { input: "2 3", output: "5" },
      { input: "-1 5", output: "4" },
      { input: "0 0", output: "0" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(a, b):\n",
      pythonUser: "    # Write your code here\n    return a + b\n",
      pythonEnd:
        '\nif __name__ == "__main__":\n    a, b = map(int, input().split())\n    print(solve(a, b))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static long solve(long a, long b) {\n",
      javaUser: "        // Write your code here\n        return a + b;\n",
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        long a = sc.nextLong();\n        long b = sc.nextLong();\n        System.out.println(solve(a, b));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nlong long solve(long long a, long long b) {\n",
      cppUser: "    // Write your code here\n    return a + b;\n",
      cppEnd:
        "}\n\nint main() {\n    long long a, b;\n    cin >> a >> b;\n    cout << solve(a, b) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "Even or Odd",
    difficulty: "easy",
    description: `## Even or Odd

Given an integer \`n\`, print \`Even\` if it is even, otherwise print \`Odd\`.

### Input Format
- A single integer \`n\`.

### Output Format
- Print \`Even\` or \`Odd\`.

### Example
\`\`\`
Input:
4

Output:
Even
\`\`\`

### Constraints
- \`-10^9 <= n <= 10^9\`
`,
    editorial: "Check whether `n % 2 == 0`. Handle negatives carefully — in most languages `-3 % 2` is still non-zero.",
    testCases: [
      { input: "4", output: "Even" },
      { input: "7", output: "Odd" },
      { input: "0", output: "Even" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(n):\n",
      pythonUser:
        '    # Write your code here\n    return "Even" if n % 2 == 0 else "Odd"\n',
      pythonEnd:
        '\nif __name__ == "__main__":\n    n = int(input())\n    print(solve(n))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static String solve(long n) {\n",
      javaUser:
        '        // Write your code here\n        return n % 2 == 0 ? "Even" : "Odd";\n',
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        long n = sc.nextLong();\n        System.out.println(solve(n));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(long long n) {\n",
      cppUser:
        '    // Write your code here\n    return (n % 2 == 0) ? "Even" : "Odd";\n',
      cppEnd:
        "}\n\nint main() {\n    long long n;\n    cin >> n;\n    cout << solve(n) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "Factorial",
    difficulty: "easy",
    description: `## Factorial

Given a non-negative integer \`n\`, return \`n!\` (factorial of \`n\`).

### Input Format
- A single integer \`n\`.

### Output Format
- Print \`n!\`.

### Example
\`\`\`
Input:
5

Output:
120
\`\`\`

### Constraints
- \`0 <= n <= 12\`
`,
    editorial: "Use a loop multiplying from 1 to n. Remember that `0! = 1`.",
    testCases: [
      { input: "5", output: "120" },
      { input: "0", output: "1" },
      { input: "1", output: "1" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(n):\n",
      pythonUser:
        "    # Write your code here\n    result = 1\n    for i in range(1, n + 1):\n        result *= i\n    return result\n",
      pythonEnd:
        '\nif __name__ == "__main__":\n    n = int(input())\n    print(solve(n))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static long solve(int n) {\n",
      javaUser:
        "        // Write your code here\n        long result = 1;\n        for (int i = 1; i <= n; i++) {\n            result *= i;\n        }\n        return result;\n",
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(solve(n));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nlong long solve(int n) {\n",
      cppUser:
        "    // Write your code here\n    long long result = 1;\n    for (int i = 1; i <= n; i++) {\n        result *= i;\n    }\n    return result;\n",
      cppEnd:
        "}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << solve(n) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "Nth Fibonacci",
    difficulty: "easy",
    description: `## Nth Fibonacci

The Fibonacci sequence is defined as:
- \`F(0) = 0\`
- \`F(1) = 1\`
- \`F(n) = F(n-1) + F(n-2)\` for \`n > 1\`

Given \`n\`, return \`F(n)\`.

### Input Format
- A single integer \`n\`.

### Output Format
- Print \`F(n)\`.

### Example
\`\`\`
Input:
6

Output:
8
\`\`\`

### Constraints
- \`0 <= n <= 30\`
`,
    editorial: "Iterate with two variables keeping the last two Fibonacci numbers.",
    testCases: [
      { input: "6", output: "8" },
      { input: "0", output: "0" },
      { input: "1", output: "1" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(n):\n",
      pythonUser:
        "    # Write your code here\n    if n <= 1:\n        return n\n    a, b = 0, 1\n    for _ in range(2, n + 1):\n        a, b = b, a + b\n    return b\n",
      pythonEnd:
        '\nif __name__ == "__main__":\n    n = int(input())\n    print(solve(n))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static long solve(int n) {\n",
      javaUser:
        "        // Write your code here\n        if (n <= 1) return n;\n        long a = 0, b = 1;\n        for (int i = 2; i <= n; i++) {\n            long next = a + b;\n            a = b;\n            b = next;\n        }\n        return b;\n",
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(solve(n));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nlong long solve(int n) {\n",
      cppUser:
        "    // Write your code here\n    if (n <= 1) return n;\n    long long a = 0, b = 1;\n    for (int i = 2; i <= n; i++) {\n        long long next = a + b;\n        a = b;\n        b = next;\n    }\n    return b;\n",
      cppEnd:
        "}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << solve(n) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "Reverse a String",
    difficulty: "easy",
    description: `## Reverse a String

Given a string \`s\`, return the reverse of \`s\`.

### Input Format
- A single line containing the string \`s\` (may contain spaces).

### Output Format
- Print the reversed string.

### Example
\`\`\`
Input:
hello

Output:
olleh
\`\`\`

### Constraints
- \`1 <= |s| <= 1000\`
`,
    editorial: "Reverse the characters in place or build a new string from the end.",
    testCases: [
      { input: "hello", output: "olleh" },
      { input: "a", output: "a" },
      { input: "LetsCode", output: "edoCsteL" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(s):\n",
      pythonUser: "    # Write your code here\n    return s[::-1]\n",
      pythonEnd:
        '\nif __name__ == "__main__":\n    s = input()\n    print(solve(s))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static String solve(String s) {\n",
      javaUser:
        "        // Write your code here\n        return new StringBuilder(s).reverse().toString();\n",
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(solve(s));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(string s) {\n",
      cppUser:
        "    // Write your code here\n    reverse(s.begin(), s.end());\n    return s;\n",
      cppEnd:
        "}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << solve(s) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "Palindrome Check",
    difficulty: "easy",
    description: `## Palindrome Check

Given a string \`s\`, print \`Yes\` if it is a palindrome (reads the same forwards and backwards), otherwise print \`No\`.

Comparison is case-sensitive and includes all characters.

### Input Format
- A single line containing the string \`s\`.

### Output Format
- Print \`Yes\` or \`No\`.

### Example
\`\`\`
Input:
racecar

Output:
Yes
\`\`\`

### Constraints
- \`1 <= |s| <= 1000\`
`,
    editorial: "Compare the string with its reverse, or use two pointers from both ends.",
    testCases: [
      { input: "racecar", output: "Yes" },
      { input: "hello", output: "No" },
      { input: "a", output: "Yes" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(s):\n",
      pythonUser:
        '    # Write your code here\n    return "Yes" if s == s[::-1] else "No"\n',
      pythonEnd:
        '\nif __name__ == "__main__":\n    s = input()\n    print(solve(s))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static String solve(String s) {\n",
      javaUser:
        '        // Write your code here\n        String rev = new StringBuilder(s).reverse().toString();\n        return s.equals(rev) ? "Yes" : "No";\n',
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(solve(s));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(string s) {\n",
      cppUser:
        '    // Write your code here\n    string rev = s;\n    reverse(rev.begin(), rev.end());\n    return (s == rev) ? "Yes" : "No";\n',
      cppEnd:
        "}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << solve(s) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "Maximum in Array",
    difficulty: "easy",
    description: `## Maximum in Array

Given an array of \`n\` integers, find the maximum value.

### Input Format
- First line: integer \`n\` — the size of the array.
- Second line: \`n\` space-separated integers.

### Output Format
- Print the maximum element.

### Example
\`\`\`
Input:
5
1 8 3 2 7

Output:
8
\`\`\`

### Constraints
- \`1 <= n <= 1000\`
- \`-10^9 <= a[i] <= 10^9\`
`,
    editorial: "Scan the array once while tracking the largest value seen so far.",
    testCases: [
      { input: "5\n1 8 3 2 7", output: "8" },
      { input: "1\n-5", output: "-5" },
      { input: "3\n10 10 9", output: "10" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(arr):\n",
      pythonUser: "    # Write your code here\n    return max(arr)\n",
      pythonEnd:
        '\nif __name__ == "__main__":\n    n = int(input())\n    arr = list(map(int, input().split()))\n    print(solve(arr))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static long solve(long[] arr) {\n",
      javaUser:
        "        // Write your code here\n        long max = arr[0];\n        for (long x : arr) {\n            if (x > max) max = x;\n        }\n        return max;\n",
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        long[] arr = new long[n];\n        for (int i = 0; i < n; i++) arr[i] = sc.nextLong();\n        System.out.println(solve(arr));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nlong long solve(vector<long long>& arr) {\n",
      cppUser:
        "    // Write your code here\n    long long maxVal = arr[0];\n    for (long long x : arr) {\n        if (x > maxVal) maxVal = x;\n    }\n    return maxVal;\n",
      cppEnd:
        "}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<long long> arr(n);\n    for (int i = 0; i < n; i++) cin >> arr[i];\n    cout << solve(arr) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "Count Vowels",
    difficulty: "easy",
    description: `## Count Vowels

Given a string \`s\`, count the number of vowels in it. Vowels are \`a\`, \`e\`, \`i\`, \`o\`, \`u\` (both lowercase and uppercase).

### Input Format
- A single line containing the string \`s\`.

### Output Format
- Print the count of vowels.

### Example
\`\`\`
Input:
Hello World

Output:
3
\`\`\`

### Constraints
- \`1 <= |s| <= 1000\`
`,
    editorial: "Iterate through each character and check membership in the vowel set (case-insensitive).",
    testCases: [
      { input: "Hello World", output: "3" },
      { input: "xyz", output: "0" },
      { input: "AEIOU", output: "5" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(s):\n",
      pythonUser:
        '    # Write your code here\n    vowels = set("aeiouAEIOU")\n    return sum(1 for c in s if c in vowels)\n',
      pythonEnd:
        '\nif __name__ == "__main__":\n    s = input()\n    print(solve(s))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static int solve(String s) {\n",
      javaUser:
        '        // Write your code here\n        String vowels = "aeiouAEIOU";\n        int count = 0;\n        for (char c : s.toCharArray()) {\n            if (vowels.indexOf(c) >= 0) count++;\n        }\n        return count;\n',
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.nextLine();\n        System.out.println(solve(s));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(string s) {\n",
      cppUser:
        '    // Write your code here\n    string vowels = "aeiouAEIOU";\n    int count = 0;\n    for (char c : s) {\n        if (vowels.find(c) != string::npos) count++;\n    }\n    return count;\n',
      cppEnd:
        "}\n\nint main() {\n    string s;\n    getline(cin, s);\n    cout << solve(s) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "FizzBuzz",
    difficulty: "easy",
    description: `## FizzBuzz

Given an integer \`n\`, print the numbers from \`1\` to \`n\` (one per line) with the following rules:
- Print \`Fizz\` if the number is divisible by \`3\`
- Print \`Buzz\` if the number is divisible by \`5\`
- Print \`FizzBuzz\` if the number is divisible by both \`3\` and \`5\`
- Otherwise print the number itself

### Input Format
- A single integer \`n\`.

### Output Format
- \`n\` lines following the FizzBuzz rules.

### Example
\`\`\`
Input:
5

Output:
1
2
Fizz
4
Buzz
\`\`\`

### Constraints
- \`1 <= n <= 100\`
`,
    editorial: "Check divisibility by 15 first (both 3 and 5), then by 3, then by 5.",
    testCases: [
      {
        input: "5",
        output: "1\n2\nFizz\n4\nBuzz",
      },
      {
        input: "15",
        output:
          "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
      },
      { input: "1", output: "1" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(n):\n",
      pythonUser:
        '    # Write your code here\n    lines = []\n    for i in range(1, n + 1):\n        if i % 15 == 0:\n            lines.append("FizzBuzz")\n        elif i % 3 == 0:\n            lines.append("Fizz")\n        elif i % 5 == 0:\n            lines.append("Buzz")\n        else:\n            lines.append(str(i))\n    return "\\n".join(lines)\n',
      pythonEnd:
        '\nif __name__ == "__main__":\n    n = int(input())\n    print(solve(n))\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static String solve(int n) {\n",
      javaUser:
        '        // Write your code here\n        StringBuilder sb = new StringBuilder();\n        for (int i = 1; i <= n; i++) {\n            if (i % 15 == 0) sb.append("FizzBuzz");\n            else if (i % 3 == 0) sb.append("Fizz");\n            else if (i % 5 == 0) sb.append("Buzz");\n            else sb.append(i);\n            if (i < n) sb.append("\\n");\n        }\n        return sb.toString();\n',
      javaEnd:
        "    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(solve(n));\n    }\n}\n",
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nstring solve(int n) {\n",
      cppUser:
        '    // Write your code here\n    string result;\n    for (int i = 1; i <= n; i++) {\n        if (i % 15 == 0) result += "FizzBuzz";\n        else if (i % 3 == 0) result += "Fizz";\n        else if (i % 5 == 0) result += "Buzz";\n        else result += to_string(i);\n        if (i < n) result += "\\n";\n    }\n    return result;\n',
      cppEnd:
        "}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << solve(n) << endl;\n    return 0;\n}\n",
    }),
  },
  {
    title: "Two Sum",
    difficulty: "easy",
    description: `## Two Sum

Given an array of integers and a target, find two indices \`i\` and \`j\` (\`i < j\`) such that \`nums[i] + nums[j] == target\`.

You may assume exactly one valid pair exists.

### Input Format
- First line: integer \`n\` — size of the array.
- Second line: \`n\` space-separated integers.
- Third line: integer \`target\`.

### Output Format
- Print two space-separated indices \`i\` and \`j\`.

### Example
\`\`\`
Input:
4
2 7 11 15
9

Output:
0 1
\`\`\`

### Constraints
- \`2 <= n <= 1000\`
- \`-10^9 <= nums[i], target <= 10^9\`
`,
    editorial:
      "Use a hash map from value → index while scanning. For each number, check if `target - nums[i]` was already seen.",
    testCases: [
      { input: "4\n2 7 11 15\n9", output: "0 1" },
      { input: "3\n3 2 4\n6", output: "1 2" },
      { input: "2\n3 3\n6", output: "0 1" },
    ],
    codeStubs: stubs({
      pythonStart: "def solve(nums, target):\n",
      pythonUser:
        "    # Write your code here\n    seen = {}\n    for i, num in enumerate(nums):\n        need = target - num\n        if need in seen:\n            return [seen[need], i]\n        seen[num] = i\n    return []\n",
      pythonEnd:
        '\nif __name__ == "__main__":\n    n = int(input())\n    nums = list(map(int, input().split()))\n    target = int(input())\n    result = solve(nums, target)\n    print(result[0], result[1])\n',
      javaStart:
        "import java.util.*;\npublic class Main {\n    public static int[] solve(int[] nums, int target) {\n",
      javaUser:
        "        // Write your code here\n        Map<Integer, Integer> seen = new HashMap<>();\n        for (int i = 0; i < nums.length; i++) {\n            int need = target - nums[i];\n            if (seen.containsKey(need)) {\n                return new int[]{seen.get(need), i};\n            }\n            seen.put(nums[i], i);\n        }\n        return new int[]{};\n",
      javaEnd:
        '    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int target = sc.nextInt();\n        int[] result = solve(nums, target);\n        System.out.println(result[0] + " " + result[1]);\n    }\n}\n',
      cppStart:
        "#include <bits/stdc++.h>\nusing namespace std;\n\nvector<int> solve(vector<int>& nums, int target) {\n",
      cppUser:
        "    // Write your code here\n    unordered_map<int, int> seen;\n    for (int i = 0; i < (int)nums.size(); i++) {\n        int need = target - nums[i];\n        if (seen.count(need)) {\n            return {seen[need], i};\n        }\n        seen[nums[i]] = i;\n    }\n    return {};\n",
      cppEnd:
        "}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    int target;\n    cin >> target;\n    vector<int> result = solve(nums, target);\n    cout << result[0] << \" \" << result[1] << endl;\n    return 0;\n}\n",
    }),
  },
];

module.exports = problems;
