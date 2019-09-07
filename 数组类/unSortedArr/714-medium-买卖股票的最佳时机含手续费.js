

/**
 *
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    if (prices.length <= 1) return 0;

    let arr = []
    let l = 0
    for(let i = 0; i < prices.length; i++){
        if (prices[i] > prices[i+1] || i === prices.length - 1){
            if (i - l > 0 && prices[i] - prices[l] > fee){
                arr.push([l, i])
            }
            // 移位到下一个单增区间的开始处
            l = i + 1;
        }
    }
    let result = 0
    for(let i = 0; i < arr.length; i++){
        result += prices[arr[i][1]] - prices[arr[i][0]]
    }
    return result - fee * arr.length;
};

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))