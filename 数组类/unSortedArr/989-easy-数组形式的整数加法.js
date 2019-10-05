// 989. 数组形式的整数加法 easy

// 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
// 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
//  
// 示例 1：
// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
// 解释 2：
// 输入：A = [2,7,4], K = 181
// 输出：[4,5,5]
// 解释：274 + 181 = 455
// 示例 3：
// 输入：A = [2,1,5], K = 806
// 输出：[1,0,2,1]
// 解释：215 + 806 = 1021
// 示例 4：
// 输入：A = [9,9,9,9,9,9,9,9,9,9], K = 1
// 输出：[1,0,0,0,0,0,0,0,0,0,0]
// 解释：9999999999 + 1 = 10000000000
//  
// 提示：
// 1 <= A.length <= 10000
// 0 <= A[i] <= 9
// 0 <= K <= 10000
// 如果 A.length > 1，那么 A[0] != 0
//

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    // 两个边界条件
    if(K===0)return A;
    if(!A.length) {
        let a = (K + '').split('')
        return a.map((a, b) => {
            return a / 1; // 换成数字形式
        })
    }

    // ==============正常流程==============
    // 先把K转化为数组，转化为两个数组相加
    let B = (K + '').split('').map((a, b) => {
        return a / 1; // 换成数字形式
    });
    // 创建新数组，用于存结果
    let ans = []
    // 循环
    let isJinwei = 0;
    let l = A.pop();
    let r = B.pop();
    while(true){
        ans.unshift((l + r + isJinwei)% 10);

        isJinwei = (l + r + isJinwei) >= 10 ? 1: 0;

        if(A.length && B.length){
            l = A.pop()
            r = B.pop()
        }else if(!A.length && !B.length){
            if(isJinwei){
                ans.unshift(1);
            }
            break;
        }else if(!A.length && B.length){
            r = B.pop();
            l = 0 // 补0
        }else{
            l = A.pop();
            r = 0;
        }
    }
    return ans;
};

console.log(addToArrayForm([1,2,0,0],34))
console.log(addToArrayForm([2,7,4],181))
console.log(addToArrayForm([2,1,5],806))
console.log(addToArrayForm([9,9,9,9,9,9,9,9,9,9],1))