// medium 229 求众数2
//
// 给定一个大小为 n 的数组，找出其中所有出现超过 ⌊ n/3 ⌋ 次的元素。
// 说明: 要求算法的时间复杂度为 O(n)，空间复杂度为 O(1)。
//
// 示例 1:
// 输入: [3,2,3]
// 输出: [3]

// 示例 2:
// 输入: [1,1,1,3,3,2,2,2]
// 输出: [1,2]


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums;
    if (nums.length === 2) return nums[0] === nums[1] ? [nums[0]]: nums;

    let hash = {}
    for(let i = 0; i < nums.length; i++){
        if (!hash[nums[i]]) hash[nums[i]] = 1;
        else{
            hash[nums[i]]++
        }
    }
    
    let resultArr = []
    for (let key in hash){
        if (hash[key] / nums.length > 1 / 3){
            resultArr.push(Number(key))
        }
    }
    return resultArr
};

console.log(majorityElement([1,1,1,3,3,2,2,2]))