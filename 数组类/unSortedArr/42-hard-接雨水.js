// 42 hard 接雨水

//给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
//
// 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 
//
// 示例:
// 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出: 6
//


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 前缀最大
    let preMax = [0]
    for(let i = 1; i < height.length; i++){
        preMax.push(Math.max(preMax[i-1], height[i-1]));
    }

    // 后缀最大
    let postMax = new Array(height.length).fill(0);
    for (let i = height.length - 2; i >= 0; i--) {
        postMax[i] = Math.max(postMax[i+1], height[i+1]);
    }

    // 去掉第一个和最后一个，肯定无法接雨水
    let sum = 0;
    for(let i = 1; i < height.length - 1; i++){
        if (Math.min(preMax[i], postMax[i]) - height[i] > 0){
            sum += Math.min(preMax[i], postMax[i]) - height[i]
        }
    }
    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trap([2,0,2]))