// LeetCode-35-easy
//
// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
// 你可以假设数组中无重复元素。
//
// 示例 1:
// 输入: [1,3,5,6], 5
// 输出: 2
//
// 示例 2:
// 输入: [1,3,5,6], 2
// 输出: 1
//
// 示例 3:
// 输入: [1,3,5,6], 7
// 输出: 4
//
// 示例 4:
// 输入: [1,3,5,6], 0
// 输出: 0

function searchInertPos(arr, target){
	// 数组中有target的情况
	let index = arr.indexOf(target)
	if (index !== -1) {
		return index
	}

    // 数组中没有target的情况
	if (arr[0] > target) return 0
	if (arr[arr.length - 1] < target) return arr.length
	for (let i = 0; i < arr.length - 1; i++) {
		if (target > arr[i] && target < arr[i + 1]){
			return i + 1
		}
	}
}


