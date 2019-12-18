// lcp2 easy 分式化简

//示例 1：
// 输入：cont = [3, 2, 0, 2]
// 输出：[13, 4]
// 解释：原连分数等价于3 + (1 / (2 + (1 / (0 + 1 / 2))))。注意[26, 8], [-13, -4]都不是正确答案。
// 

/**
 * @param {number[]} cont
 * @return {number[]}
 */
var fraction = function(cont) {
    if (!cont.length)return 0;
    if (cont.length === 1)return [cont[0],1];
    let fenzi = 1;
    let fenmu = cont[cont.length - 1];
    for (let i = cont.length - 2; i >= 0; i--) {
        fenzi = cont[i] * fenmu + fenzi;
        [fenzi, fenmu] = [fenmu, fenzi]
    }
    // 最后一次，其实不用再取倒数了，但是上面循环取倒数了，所以下面再倒一次
    return [fenmu, fenzi]
};
console.log(fraction([1, 5, 6, 6, 5, 7, 5, 5, 4, 7]))