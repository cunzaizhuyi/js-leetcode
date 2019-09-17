


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let resultArr = []
    let nums = []
    for(let i = 1; i <= n; i++){
        nums.push(i)
    }

    let dfs = (nums, k) => {
        if(k === 0){
            return resultArr;
        }else{
            dfs(nums.s)
        }

    }

    dfs(nums, k);
    return resultArr;
};
