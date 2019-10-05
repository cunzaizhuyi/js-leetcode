// 680. 验证回文字符串Ⅱ  easy

// 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
//
// 示例 1:
// 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意:
// 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let l = 0,r = s.length-1

    // 再继续循环下去
    let fn = (s, l, r) => {
        while(l <= r){
            if(s[l] !== s[r]){
                return false;
            }
            l++;r--;
        }
        return true;
    };
    while(l <= r){
        if(s[l] !== s[r]){
            return fn(s, l+1, r) || fn(s, l, r-1);
        }
        l++; r--;
    }
    return true;
};

console.log(validPalindrome('abc'))