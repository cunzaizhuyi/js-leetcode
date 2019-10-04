// 18. 四数之和 medium

//给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，
// 使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
// 注意：
// 答案中不可以包含重复的四元组。
// 示例：
// 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
// 满足要求的四元组集合为：
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]
//

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => {
        return a - b;
    })
    let ans = []
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                for(let l = k+1; l < nums.length; l++){
                    if(nums[i]+nums[j]+nums[k]+nums[l] === target
                        && !hash[nums[i]+','+ nums[j] + ',' + nums[k] +','+ nums[l]])
                        {
                            ans.push([nums[i], nums[j], nums[k], nums[l]]);
                            hash[nums[i]+','+ nums[j] + ',' + nums[k] +','+ nums[l]] = true;
                        }

                }
            }
        }
    }
    return ans;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))