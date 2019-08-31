

/**
 * 最后一个case超时
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let arr = []
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] < nums[i]) count++;
        }
        arr.push(count)
    }
    return arr;
};



console.log(countSmaller2([5,2,6,1]))