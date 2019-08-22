


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    // 只有 length>=3 的时候，才有可能有两个及以上的逆序数
    if (nums.length <= 2) return true;

    let count = 0
    let max = nums[0]
    for(let i = 1; i < nums.length; i++){
        if (nums[i] < max){
            count++;
        }else{
            max = nums[i]
        }
    }
    if (count > 1)return false
    else if (count <= 1) return true
};

// console.log(checkPossibility([3,4,2,3]))
console.log(checkPossibility([4,2,3]))