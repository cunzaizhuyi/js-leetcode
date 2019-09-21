// 507 easy 完美数

// 对于一个 正整数，如果它和除了它自身以外的所有正因子之和相等，我们称它为“完美数”。
// 给定一个 整数 n， 如果他是完美数，返回 True，否则返回 False
//
// 示例：
// 输入: 28
// 输出: True
// 解释: 28 = 1 + 2 + 4 + 7 + 14
//
// 提示：
// 输入的数字 n 不会超过 100,000,000. (1e8)


/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num <= 2) return false
    let arr = [1]

    let index = ~~(num/2)
    while(index !== 1){
        if(num % index === 0){
            arr.push(index);
        }
        index--;
    }
    let sum = arr.reduce((p,n) => {
        return p+n;
    }, 0)
    return sum === num;
};

console.log(checkPerfectNumber(28))