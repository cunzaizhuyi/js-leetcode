// 367 easy 有效的完全平方数

// 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
// 说明：不要使用任何内置的库函数，如  sqrt。
//
// 示例 1：
// 输入：16
// 输出：True

// 示例 2：
// 输入：14
// 输出：False

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num <= 0) return false;
    if (num === 1) return true;
    for(let i = 2; i <= Math.floor(num / 2); i++){
        if (i * i === num){
            return true;
        }
    }
    return false;
};


// 二分法
var isPerfectSquare2 = function(num) {
    if (num <= 0) return false;
    if (num === 1) return true;

    let left = 2;
    let right = Math.floor(num / 2);
    let mid = Math.floor((right + left) / 2)
    while(true){
        if (left > right)return false;
        if (mid * mid === num){ return true;}
        else if (mid * mid > num){
            right = mid - 1;
            mid = Math.floor((right + left) / 2)
        } else{
            left = mid + 1;
            mid = Math.floor((right + left) / 2)
        }
    }
};
console.log(isPerfectSquare2(16))