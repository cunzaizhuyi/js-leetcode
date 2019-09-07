

/**
 * 滑动窗口解法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 特殊情况
    if (s.length === 1) return 1;
    if (s.length === 2) return s[0] === s[1] ? 1: 2;

    let arr = s.split('')
    let l = 0, r = 0
    let hash = {}
    let max = 0;
    while(l < arr.length && r < arr.length){
        if (!hash[arr[r]]) {
            hash[arr[r]] = true;
            r++;
        } else {
            delete hash[arr[l]]
            l++;
        }
        if (max < Object.values(hash).length){
            max = Object.values(hash).length
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))