// 1282 medium 用户分组


// 有 n 位用户参加活动，他们的 ID 从 0 到 n - 1，每位用户都 恰好 属于某一用户组。
// 给你一个长度为 n 的数组 groupSizes，其中包含每位用户所处的用户组的大小，
// 请你返回用户分组情况（存在的用户组以及每个组中用户的 ID）。
// 你可以任何顺序返回解决方案，ID 的顺序也不受限制。此外，题目给出的数据保证至少存在一种解决方案。
//
// 示例 1：
// 输入：groupSizes = [3,3,3,3,3,1,3]
// 输出：[[5],[0,1,2],[3,4,6]]
// 解释：
// 其他可能的解决方案有 [[2,1,6],[5],[0,4,3]] 和 [[5],[0,6,2],[4,3,1]]。
// 示例 2：
// 输入：groupSizes = [2,1,3,3,3,2]
// 输出：[[1],[0,5],[2,3,4]]
//  
//
// 提示：
// groupSizes.length == n
// 1 <= n <= 500
// 1 <= groupSizes[i] <= n


/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    if(!groupSizes.length)return []

    // n方复杂度解法
    let index = 0;
    let result = []
    while(index !== groupSizes.length){
        // 已经被分组的，就不能再用了
        if(groupSizes[index] === -1) {
            index++;
            continue;
        }

        let size = groupSizes[index];
        let newGroup = [index]
        let i = index + 1;
        while(newGroup.length !== size){
            if (groupSizes[i] === groupSizes[index]){
                newGroup.push(i);
                groupSizes[i] = -1;//标记一下，表示已经用过了
            }
            i++;
        }
        result.push(newGroup)
        index++;
    }
    return result;
};
console.log(groupThePeople([2,1,3,3,3,2]))