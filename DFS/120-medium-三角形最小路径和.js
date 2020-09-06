
// 120. 三角形最小路径和 medium

// 给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
//
//  
// 例如，给定三角形：
//
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// 自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。
//
//
// 说明：
// 如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。


// 会超时。自顶向下
var minimumTotal = function(triangle) {
    let minValue = Number.MAX_SAFE_INTEGER;
    const dfs = (index, depth, sum, triangle) => {
        if (depth === triangle.length - 1) {
            if (triangle[depth][index] || triangle[depth][index] === 0) {
                minValue = Math.min(minValue, sum + triangle[depth][index]);
            }
            if (triangle[depth][index+1] || triangle[depth][index+1] === 0) {
                minValue = Math.min(minValue, sum + triangle[depth][index + 1]);
            }
            return;
        }
        if (index > depth) return;
        if (triangle[depth][index] || triangle[depth][index] === 0){
            dfs(index, depth + 1, sum + triangle[depth][index], triangle);
        }
        if(triangle[depth][index+1] || triangle[depth][index+1] === 0){
            dfs(index + 1, depth + 1, sum + triangle[depth][index + 1], triangle);
        }
    };
    dfs(0, 0, 0, triangle);
    return minValue;
};




console.log('111: ', minimumTotal([
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
]))