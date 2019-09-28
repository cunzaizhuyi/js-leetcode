// 216 medium 组合总和3

// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
//
// 说明：
// 所有数字都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:
// 输入: k = 3, n = 7
// 输出: [[1,2,4]]
// 示例 2:
// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let resultArr = [];
    let path = []

    // 先生成 1-9 的数组
    let nums = [];
    for(let i = 1; i <= 9; i++){
        nums.push(i)
    }

    let dfs = (start, nums, k) => {
        if(k === 0){
            let sum = path.reduce((p,n) => {
                return p+n
            }, 0)
            if(sum === n){
                resultArr.push([...path]);
                return;
            }
        }

        for(let i = start; i < nums.length; i++){
            if(path.indexOf(nums[i]) === -1){
                path.push(nums[i])
            }else{
                continue;
            }
            dfs(i + 1, nums,k-1)
            path.splice(path.indexOf(nums[i]), 1)
        }
    }

    dfs(0, nums, k);
    return resultArr;
};

console.log(combinationSum3(3,7))
console.log(combinationSum3(3,9))