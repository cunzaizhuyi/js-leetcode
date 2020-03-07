// 1363 hard 形成三的最大倍数

// 给你一个整数数组 digits，你可以通过按任意顺序连接其中某些数字来形成 3 的倍数，请你返回所能得到的最大的 3 的倍数。
// 由于答案可能不在整数数据类型范围内，请以字符串形式返回答案。
// 如果无法得到答案，请返回一个空字符串。
//
// 示例 1：
// 输入：digits = [8,1,9]
// 输出："981"
// 示例 2：
// 输入：digits = [8,6,7,1,0]
// 输出："8760"
// 示例 3：
// 输入：digits = [1]
// 输出：""
// 示例 4：
// 输入：digits = [0,0,0,0,0,0]
// 输出："0"
//
// 提示：
// 1 <= digits.length <= 10^4
// 0 <= digits[i] <= 9
// 返回的结果不应包含不必要的前导零。
//


var largestMultipleOfThree = function(digits) {
    digits.sort((a,b) => {
        return b-a;
    })
    let sum = digits.reduce((p,n) => {
        return p+n
    }, 0)
    // 如果 各位之和 正好是3的倍数，一个数也不用删除
    if(sum % 3 === 0){
        if(digits[0] !== 0){
            return digits.join('')
        } else {
            return '0'
        }
    }
    // 如果 各位之和 不是3的倍数，试试删除一位能否整除
    for (let i = digits.length - 1; i >= 0; i--) {
        if ((sum - digits[i]) % 3 ===0){
            digits.splice(i, 1);
            if(digits[0] !== 0){
                return digits.join('')
            } else {
                return '0'
            };
        }
    }
    // 试试删除两个数字，能否整除
    for (let i = digits.length - 1; i >= 1; i=i-2) {
        if ((sum - digits[i] - digits[i-1]) % 3 ===0){
            digits.splice(i - 1, 2);
            if(digits[0] !== 0){
                return digits.join('')
            } else {
                return '0'
            };
        }
    }
};
// console.log(largestMultipleOfThree([8,6,7,1,0]))
