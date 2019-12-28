// 46 medium 全排列

// 给定一个没有重复数字的序列，返回其所有可能的全排列。
//
// 示例:
// 输入: [1,2,3]
// 输出:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let fn = (nums) => {
    let ans = [];
    let hash = [];
    let path = [];
    let dfs = (idx, nums) => {
        if(idx === nums.length) {
            ans.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++){
            if(hash[i]) continue;
            path.push(nums[i]);
            hash[i] = true; // 表示是否往res放过的哈希
            dfs(idx + 1, nums);
            hash[i] = false;
            path.pop();
        }
    }
    dfs( 0, nums);
    return ans;
}