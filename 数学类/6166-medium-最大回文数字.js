// https://leetcode.cn/problems/largest-palindromic-number/


// 给你一个仅由数字（0 - 9）组成的字符串 num 。
//
// 请你找出能够使用 num 中数字形成的 最大回文 整数，并以字符串形式返回。该整数不含 前导零 。
//
// 注意：
//
// 你 无需 使用 num 中的所有数字，但你必须使用 至少 一个数字。
// 数字可以重新排序。
//  
//
// 示例 1：
//
// 输入：num = "444947137"
// 输出："7449447"
// 解释：
// 从 "444947137" 中选用数字 "4449477"，可以形成回文整数 "7449447" 。
// 可以证明 "7449447" 是能够形成的最大回文整数。
// 示例 2：
//
// 输入：num = "00009"
// 输出："9"
// 解释：
// 可以证明 "9" 能够形成的最大回文整数。
// 注意返回的整数不应含前导零。
//  
//
// 提示：
//
// 1 <= num.length <= 105
// num 由数字（0 - 9）组成



/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function(num) {
    const obj = {};
    for(let i = 0; i < num.length; i++){
        obj[num[i]] ? obj[num[i]]++ : obj[num[i]] = 1;
    }

    let result = [];
    let single = '';
    for (let i = 9; i >= 0; i--) {
        const num = obj[i];
        if (!num) continue;
        if (num % 2 === 0) {
            if (result.length === 0 && i === 0) continue;
            result.push(...(new Array(num / 2).fill(`${i}`)));
        } else {
            single = single ? single : `${i}`;
            if (result.length === 0 && i === 0) continue;
            result.push(...(new Array((num - 1) / 2).fill(`${i}`)));
        }
    }
    if (!single) {
        return result.join('') + result.reverse().join('');
    } else {
        return result.join('') + single + result.reverse().join('')
    }
};
