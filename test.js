/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    if(nums.length === 1) return 0;
    if(nums.length === 2) return nums[0] <= nums[1] ? 0: 2;
    let arr = []
    let index = 0
    while(index < nums.length - 1){
        if(nums[index] >= nums[index + 1]){
            for(let j = index + 1; j < nums.length; j++){
                if(j === nums.length - 1 && nums[index] > nums[j]){
                    arr.push([index, j]);
                    index = j;
                    break;
                }else if(nums[index] <= nums[j]){
                    arr.push([index, j-1]);
                    index = j;
                    break;
                }
            }
        }else{
            index++;
        }
    }
    if(arr.length === 0) return 0
    else if(arr.length === 1) return arr[0][1] - arr[0][0] + 1;
    else{
        return arr[arr.length - 1][1] - arr[0][0] + 1;
    }
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([5,4,3,2,1]))
console.log(findUnsortedSubarray([1,3,2,3,3]))
console.log(findUnsortedSubarray([2,3,3,2,4]))


