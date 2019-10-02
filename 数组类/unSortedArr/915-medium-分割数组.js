// 915 medium 分割数组

// 给定一个数组 A，将其划分为两个不相交（没有公共元素）的连续子数组 left 和 right， 使得：
// left 中的每个元素都小于或等于 right 中的每个元素。
// left 和 right 都是非空的。
// left 要尽可能小。
// 在完成这样的分组后返回 left 的长度。可以保证存在这样的划分方法。
//
// 示例 1：
// 输入：[5,0,3,8,6]
// 输出：3
// 解释：left = [5,0,3]，right = [8,6]
// 示例 2：
// 输入：[1,1,1,0,6,12]
// 输出：4
// 解释：left = [1,1,1,0]，right = [6,12]
//
// 提示：
// 2 <= A.length <= 30000
// 0 <= A[i] <= 10^6
// 可以保证至少有一种方法能够按题目所描述的那样对 A 进行划分。


/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function(A) {
    if(!A || A.length === 0) return 0;

    let leftMax = A[0];
    let curMax = A[0];
    let index = 0;
    for(let i = 1; i < A.length; i++){
        curMax = Math.max(curMax, A[i]);

        if(A[i] < leftMax){
            // 为了跳过的那些，比A[0]大的数。这步比较难想。
            leftMax = curMax;
            index = i; // 更新left右边界；
        }

    }
    return index + 1; // 因为是返回长度
};
// console.log(partitionDisjoint([5,0,3,8,6]))
// console.log(partitionDisjoint([1,1,1,0,6,12]))
// console.log(partitionDisjoint([1,5,0,6,6,12]))
console.log(partitionDisjoint([32,57,24,19,0,24,49,67,87,87]))