// 面试题66. 构建乘积数组 easy

// 给定一个数组 A[0,1,…,n-1]，请构建一个数组 B[0,1,…,n-1]，
// 其中 B 中的元素 B[i]=A[0]×A[1]×…×A[i-1]×A[i+1]×…×A[n-1]。不能使用除法。
//
// 示例:
// 输入: [1,2,3,4,5]
// 输出: [120,60,40,30,24]
//
// 提示：
// 所有元素乘积之和不会溢出 32 位整数
// a.length <= 100000


var constructArr = function(a) {
    if (!a.length) return [];
    // 前缀积
    let p = [a[0]]
    for(let i = 1; i < a.length; i++){
        p[i] = p[i-1] * a[i];
    }
    // 后缀积
    let n = [];
    n[a.length - 1] = a[a.length - 1];
    for (let i = a.length - 2; i >= 0; i--) {
        n[i] = n[i + 1] * a[i];
    }

    // 结果
    let result = [n[1]] // 第一个数
    for(let i = 1; i <= a.length - 2; i++){
        result.push(p[i - 1] * n[i + 1]);
    }
    result.push(p[a.length - 2]) // 最后数
    return result;
};