// 77 medium 组合

// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
//
// 示例:
// 输入: n = 4, k = 2
// 输出:
//     [
//         [2,4],
//         [3,4],
//         [2,3],
//         [1,2],
//         [1,3],
//         [1,4],
//     ]


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let resultArr = [];
    let path = []

    // 先生成 1-N 的数组
    let nums = [];
    for(let i = 1; i <= n; i++){
        nums.push(i)
    }
    if(n===k){
        resultArr.push(nums)
        return resultArr;
    }

    let dfs = (start, nums, k) => {
        if(k === 0){
            resultArr.push([...path]);
            return;
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

// console.log(combine(4, 2))
// console.log(combine(4, 3))
console.log(combine(13, 10))