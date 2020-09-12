// 312 hard 戳气球

// 有 n 个气球，编号为0 到 n-1，每个气球上都标有一个数字，这些数字存在数组 nums 中。
//
// 现在要求你戳破所有的气球。每当你戳破一个气球 i 时，你可以获得 nums[left] * nums[i] * nums[right] 个硬币。
// 这里的 left 和 right 代表和 i 相邻的两个气球的序号。注意当你戳破了气球 i 后，气球 left 和气球 right 就变成了相邻的气球。
//
// 求所能获得硬币的最大数量。
//
// 说明:
// 你可以假设 nums[-1] = nums[n] = 1，但注意它们不是真实存在的所以并不能被戳破。
// 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100

// 示例:
// 输入: [3,1,5,8]
// 输出: 167
// 解释: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
//      coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167


// DFS解法
let maxCoins = (nums) => {
    let max = 0;
    let vis = [];
    let dfs = (step, curSum, nums) => {
        if (step === nums.length){
            max = Math.max(max, curSum);
            return;
        }
        for (let i = 0; i < nums.length; i++){
            if (vis[i])continue;

            vis[i] = true;
            // 查找左右相邻
            let l = 1, r = 1;
            let j = i - 1;
            while(j >= 0){
                if(vis[j] === false) {
                    l = nums[j];
                    break;
                }
                j--;
            }
            let k = i + 1;
            while(k <= nums.length - 1){
                if(!vis[k]) {
                    r = nums[k];
                    break;
                }
                k++
            }
            let mul = l * nums[i] * r;
            dfs(step + 1, mul + curSum, nums);
            vis[i] = false;
        }
    }
    dfs(0, 0, nums);
    return max;
}
// console.log(maxCoins([3,1,5,8]))
// console.log(maxCoins([1,5]))
console.log(maxCoins([7,9,8,0,7,1,3,5,5,2,3,3])) // 超时