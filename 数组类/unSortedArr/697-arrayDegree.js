//697. 数组的度 easy

// 给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。
// 你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
//
// 示例 1:
// 输入: [1, 2, 2, 3, 1]
// 输出: 2
// 解释:
// 		输入数组的度是2，因为元素1和2的出现频数最大，均为2.
// 		连续子数组里面拥有相同度的有如下所示:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// 最短连续子数组[2, 2]的长度为2，所以返回2.

// 示例 2:
// 输入: [1,2,2,3,1,4,2]
// 输出: 6

// 注意:
// 1 nums.length 在1到50,000区间范围内。
// 2 nums[i] 是一个在0到49,999范围内的整数。


/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
	let hash = {}
	for (let i = 0; i < nums.length; i++) {
		if(hash[nums[i]]){
			hash[nums[i]].count++
			hash[nums[i]].last = i
		}else{
			hash[nums[i]] = {}
			hash[nums[i]].count = 1
			hash[nums[i]].first = i
			hash[nums[i]].last = i
		}
	}

	let mostCountVal = nums[0]
	for (let curVal in hash) {
		if (hash[curVal].count === hash[mostCountVal].count){
			if(hash[curVal].last - hash[curVal].first < hash[mostCountVal].last - hash[mostCountVal].first){
				mostCountVal = curVal
			}
		} else if (hash[curVal].count > hash[mostCountVal].count){
			mostCountVal = curVal
		}
	}

	return hash[mostCountVal].last - hash[mostCountVal].first + 1
};

console.log(findShortestSubArray([1,2,2,3,1,4,2]))