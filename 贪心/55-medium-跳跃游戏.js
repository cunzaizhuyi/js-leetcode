// 55 medium 跳跃游戏

// 给定一个非负整数数组，你最初位于数组的第一个位置。
// 数组中的每个元素代表你在该位置可以跳跃的最大长度。
// 判断你是否能够到达最后一个位置。
//
// 示例 1:
// 输入: [2,3,1,1,4]
// 输出: true
// 解释: 从位置 0 到 1 跳 1 步, 然后跳 3 步到达最后一个位置。

// 示例 2:
// 输入: [3,2,1,0,4]
// 输出: false
// 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // 记录每个位置可以调到的最远的位置的索引
    let arr = []
    for(let i = 0; i < nums.length; i++){
        arr.push(i + nums[i]);
    }
    
    let max_index = 0
    let curIndex = 0
    for(let j = 0; j < arr.length; j++){
        // 更新在当前下能跳的最远的位置的索引
        if(arr[j] > max_index){
            max_index = arr[j]
        }

        // 如果当前位置下，可以跳的最远距离是自身或比自身还小，就停止
        curIndex = j;
        if(curIndex >= max_index){
            break;
        }
    }
    return curIndex >= nums.length-1
};

console.log(canJump( [2,3,1,1,4]))
console.log(canJump( [3,2,1,0,4]))