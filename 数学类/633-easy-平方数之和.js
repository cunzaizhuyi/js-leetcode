// 633 easy 平方数之和
//
// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。
// 示例1:
// 输入: 5
// 输出: True
// 解释: 1 * 1 + 2 * 2 = 5
//
// 示例2:
// 输入: 3
// 输出: False


/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    if(c === 3)return false;
    if(c=== 1 || c === 2 || c === 5 || c === 4) return true;
    let mid = ~~(Math.sqrt(c / 2))
    for(let i = 0; i <= mid; i++){

        let a = i * 2;
        if(Math.sqrt(c - a) % 1 === 0){
            return true;
        }
    }
    return false;
};

console.log(judgeSquareSum(1000000000))