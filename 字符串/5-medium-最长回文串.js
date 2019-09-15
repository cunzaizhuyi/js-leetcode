// 5 medium 最长回文串
//
// 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
// 示例 1：
// 输入: "babad"
// 输出: "bab"
// 注意: "aba" 也是一个有效答案。

// 示例 2：
// 输入: "cbbd"
// 输出: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let resStr = '';
    // 扫两遍，第一遍，假设结果是个奇数回文串，则最长回文串在这个循环里找到
    for(let i = 0; i < s.length; i++){
        let l = i, r = i;
        while(i < s.length && s[l] === s[r] && l >= 0 && r < s.length){
            l--;
            r++;
        }
        // 循环跳出时，l, r两个字符是不相等的，所以回文串是l+1 --->  r-1 这个范围
        if(r - l - 1 > resStr.length){
            resStr = s.slice(l+1, r)
        }
    }

    // 第二遍，假设结果是偶数回文串，则最长的回文串在这个循环里找到
    for(let i = 1; i < s.length; i++){
        let l = i - 1, r = i;
        while(i < s.length && s[l] === s[r] && l >= 0 && r < s.length){
            l--;
            r++;
        }
        if(r - l - 1 > resStr.length){
            resStr = s.slice(l+1, r)
        }
    }
    return resStr
};

console.log(longestPalindrome('babad'))