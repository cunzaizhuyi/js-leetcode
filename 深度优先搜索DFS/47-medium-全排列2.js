// 47. 全排列 II  medium

// 给定一个可包含重复数字的序列，返回所有不重复的全排列。
//
// 示例:
// 输入: [1,1,2]
// 输出:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let ans = [];
    let ansStr = []
    let hash = [];
    let path = [];
    let dfs = (idx, nums) => {
        if(idx === nums.length) {
            if(ansStr.indexOf(path.join(''))===-1){
                ansStr.push(path.join(''))
                ans.push([...path]);
            }
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
};

console.log(permuteUnique([1,1,2]))