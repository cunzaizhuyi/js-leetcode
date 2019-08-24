// 204 easy 计算质数

// 统计所有小于非负整数 n 的质数的数量。
//
// 示例:
// 输入: 10
// 输出: 4
// 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0
    for(let i = 0; i < n; i++){
        if (isPrime(i)){
            count++;
        }
    }
    return count;
};


var isPrime = function(n){
    if(n <= 1) return false;
    if (n === 2) return true;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if (n % i === 0){
            return false
        }
    }
    return true
}

console.log(countPrimes(10))