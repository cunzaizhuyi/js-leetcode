//面试题 16.24. 数对和 medium

//设计一个算法，找出数组中两数之和为指定值的所有整数对。一个数只能属于一个数对。
//
// 示例 1:
// 输入: nums = [5,6,5], target = 11
// 输出: [[5,6]]
// 示例 2:
// 输入: nums = [5,6,5,6], target = 11
// 输出: [[5,6],[5,6]]
// 提示：
// nums.length <= 100000

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var pairSums = function(nums, target) {
    if(nums.length<=1)return []
    let h = {};
    for(let i = 0;i < nums.length; i++){
        if(Array.isArray(h[nums[i]])){
            h[nums[i]].push(i);
        }else{
            h[nums[i]] = [i];
        }
    }

    let res = [];
    let vis = [];
    for(let i = 0;i < nums.length; i++){
        if(h[target - nums[i]] && h[target - nums[i]].length && !vis[i]){
            // 先删除用过的
            let arr = h[target-nums[i]]
            for(let k=arr.length-1; k>=0; k--){
                if(vis[arr[k]]){
                    arr.splice(k,1);
                }
            }
            // 没用过的 取队首；当然还要保证两个数不是同一个索引
            if(arr.length && arr[0] !== i){
                res.push([nums[i], target-nums[i]])
                vis[i]=true;
                vis[arr[0]]=true;
                arr.shift();
            }
        }
    }
    return res;
};