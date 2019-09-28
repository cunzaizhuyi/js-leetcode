// 322 medium 

// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
// 如果没有任何一种硬币组合能组成总金额，返回 -1。
//
// 示例 1:
// 输入: coins = [1, 2, 5], amount = 11
// 输出: 3
// 解释: 11 = 5 + 5 + 1
// 示例 2:
// 输入: coins = [2], amount = 3
// 输出: -1
// 说明:
// 你可以认为每种硬币的数量是无限的。


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    
    dp[0] = 0;
    for(let money = 1; money <= amount; money++){
        
        for(let j = 0; j < coins.length; j++){
            if(coins[j] <= money){
                dp[money] = Math.min(dp[money], dp[money - coins[j]] + 1)
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};

console.log(coinChange([1, 2, 5], 11))