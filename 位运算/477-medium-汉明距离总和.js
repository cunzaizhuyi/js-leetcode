// 477 medium 汉明距离总和

// 两个整数的 汉明距离 指的是这两个数字的二进制数对应位不同的数量。
// 计算一个数组中，任意两个数之间汉明距离的总和。
//
// 示例:
// 输入: 4, 14, 2
// 输出: 6
//
// 解释: 在二进制表示中，4表示为0100，14表示为1110，2表示为0010。（这样表示是为了体现后四位之间关系）
// 所以答案为：
// HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
// 注意:
// 数组中元素的范围为从 0到 10^9。
// 数组的长度不超过 10^4。


/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    if(!nums.length) return 0;

    let total = 0;
    // 不超过32位
    for(let i = 0; i < 32; i++){
        let oneCount = 0 // 1的个数
        for(let j = 0; j < nums.length; j++){
            oneCount += nums[j] & 1; // 看看是不是1， 是就累加上
            nums[j] = nums[j] >> 1; // 除2
        }
        total += oneCount * (nums.length - oneCount) // 1的个数乘以0的个数
    }
    return total
};

console.log(totalHammingDistance([4,14,2]))

