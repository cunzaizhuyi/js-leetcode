// 1362 medium 最接近的因数

// 给你一个整数 num，请你找出同时满足下面全部要求的两个整数：
//
// 两数乘积等于  num + 1 或 num + 2
// 以绝对差进行度量，两数大小最接近
// 你可以按任意顺序返回这两个整数。
//
// 示例 1：
// 输入：num = 8
// 输出：[3,3]
// 解释：对于 num + 1 = 9，最接近的两个因数是 3 & 3；对于 num + 2 = 10, 最接近的两个因数是 2 & 5，因此返回 3 & 3 。
// 示例 2：
// 输入：num = 123
// 输出：[5,25]
// 示例 3：
// 输入：num = 999
// 输出：[40,25]
//  
// 提示：
// 1 <= num <= 10^9


var closestDivisors = function(num) {
    let n1 = num + 1;
    let n2 = num + 2;
    let fn = (n) => {
        let a = []; // 存放两个数
        for(let i = ~~Math.sqrt(n); i >= 1; i--){
            if (n % i === 0){
                a = [i, n / i]
                // 只需要找一次即可，因为最接近的因数肯定是距离平方根最近的两个数
                return a;
            }
        }
        return a;
    }
    let a1 = fn(n1);
    let a2 = fn(n2);
    if (Math.abs(a1[0]- a1[1]) > Math.abs(a2[0]- a2[1])){
        return a2;
    } else {
        return a1;
    }
};
// console.log(closestDivisors(1))