// 1071 easy 字符串的最大公因子

// 对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。
// 返回字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。
// 

// 示例 1：
// 输入：str1 = "ABCABC", str2 = "ABC"
// 输出："ABC"
// 示例 2：
// 输入：str1 = "ABABAB", str2 = "ABAB"
// 输出："AB"
// 示例 3：
// 输入：str1 = "LEET", str2 = "CODE"
// 输出：""


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return '';
    let gcd = (a, b) => {
        return b === 0 ? a: gcd(b, a % b);
    }
    return str1.slice(0, gcd(str1.length, str2.length));
};

console.log(gcdOfStrings('ABCABC', 'ABC'))