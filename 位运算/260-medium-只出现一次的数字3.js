// 260 medium 只出现一次的数字3

// 给定一个整数数组 nums，其中恰好有两个元素只出现一次，其余所有元素均出现两次。 找出只出现一次的那两个元素。
//
// 示例 :
// 输入: [1,2,1,3,2,5]
// 输出: [3,5]

// 注意：
// 结果输出的顺序并不重要，对于上面的例子， [5, 3] 也是正确答案。
// 你的算法应该具有线性时间复杂度。你能否仅使用常数空间复杂度来实现？



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let hash = {}
    for(let i = 0; i < nums.length; i++){
        if(!hash[nums[i]]) hash[nums[i]] = 1;
        else {
            hash[nums[i]]++;
        }
    }
    
    let arr = []
    for(let key in hash){
        if(hash[key] === 1) {
            arr.push(Number(key))
        }
    }
    return arr;
};

console.log(singleNumber([1,2,1,3,2,5]))