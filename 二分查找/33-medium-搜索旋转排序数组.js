// 33 medium 搜索旋转排序数组

//假设按照升序排序的数组在预先未知的某个点上进行了旋转。
//
// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
//
// 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
//
// 你可以假设数组中不存在重复的元素。
//
// 你的算法时间复杂度必须是 O(log n) 级别。
//
// 示例 1:
// 输入: nums = [4,5,6,7,0,1,2], target = 0
// 输出: 4
// 示例 2:
// 输入: nums = [4,5,6,7,0,1,2], target = 3
// 输出: -1
// 在真实的面试中遇到过这道题？
//


// 解题思路：
// https://www.cnblogs.com/ariel-dreamland/p/9138064.html
let search = (nums, target) => {
    if (!nums.length) return -1;
    if (nums.length <= 3) return nums.indexOf(target);
    let left = 0;
    let right = nums.length - 1;
    while(left <= right){
        let mid = ~~((left + right) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < nums[right]){ // 右半段是有序的
            if (nums[mid] < target && target <= nums[right]){
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }else { // 左半段是有序的
            if (nums[left] <= target && target < nums[mid]){
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
}

let nums = [4,5,6,7,0,1,2];
console.log(search(nums, 0));