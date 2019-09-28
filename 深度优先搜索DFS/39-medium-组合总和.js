// 39 medium 组合总和

// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。
//
// 说明：
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:
// 输入: candidates = [2,3,6,7], target = 7,
//     所求解集为:
// [
//     [7],
//     [2,2,3]
// ]
// 示例 2:
// 输入: candidates = [2,3,5], target = 8,
//     所求解集为:
// [
//     [2,2,2,2],
//     [2,3,3],
//     [3,5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let ans = []
    let path = []
    candidates.sort((a,b) => {
        return b-a
    });
    let min = candidates[candidates.length-1]

    let dfs = (start, rest, arr) => {
        if(rest === 0){
            ans.push(path.slice())
        }
        if(rest < min){
            return;
        }
        for(let i = start; i < arr.length; i++){
            path.push(arr[i]);
            dfs(i, rest - arr[i], candidates);
            path.pop()
        }
    };
    dfs(0, target, candidates);
    return ans
};

console.log(combinationSum([2,3,6,7], 7))