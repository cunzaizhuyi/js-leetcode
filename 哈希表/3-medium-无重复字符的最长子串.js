

/**
 * 双指针解法
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 特殊情况
    if (s.length === 1) return 1;
    if (s.length === 2) return s[0] === s[1] ? 1: 2;

    let arr = s.split('')
    let l = 0, r = 1
    let max = 1;
    while(l < arr.length && r < arr.length){
        // 判断当前有无重复, 重复
        if (arr.slice(l, r))
    }
};