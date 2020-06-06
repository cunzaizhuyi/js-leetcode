// 11 medium 盛最多水的容器

// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 说明：你不能倾斜容器，且 n 的值至少为 2。

// 示例:
// 输入: [1,8,6,2,5,4,8,3,7]
// 输出: 49


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(!height.length) return 0;

    // 双指针解法。
    let l = 0;
    let r = height.length - 1;
    let area = 0;
    while(l < r){
        let cur = Math.min(height[r], height[l]) * (r - l);
        area = Math.max(cur, area);

        // 移动指针
        // 如果面积想要更大，就把较矮一侧，往里移动
        if (height[l] < height[r]){
            l++;
        } else {
            r--;
        }
    }
    return area;
};