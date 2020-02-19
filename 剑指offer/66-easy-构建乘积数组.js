// 面试题66. 构建乘积数组 easy





// 66
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