// 342 easy 4的幂

// 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
//
// 示例 1:
// 输入: 16
// 输出: true

// 示例 2:
// 输入: 5
// 输出: false
// 进阶：
// 你能不使用循环或者递归来完成本题吗？


/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if(num === 1) return true;
    while(num > 3){
        num = num / 4;
    }
    if(num === 1) return true
    else{
        return false
    }
};

console.log(isPowerOfFour(4))