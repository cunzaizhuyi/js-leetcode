// 1037. 有效的回旋镖 easy

// 回旋镖定义为一组三个点，这些点各不相同且不在一条直线上。
// 给出平面上三个点组成的列表，判断这些点是否可以构成回旋镖。
//
// 示例 1：
// 输入：[[1,1],[2,3],[3,2]]
// 输出：true

// 示例 2：
// 输入：[[1,1],[2,2],[3,3]]
// 输出：false
//
// 提示：
// points.length == 3
// points[i].length == 2
// 0 <= points[i][j] <= 100


/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let [a, b, c] = points;
    // 含有相同点
    if(a+'' === b+'' || a+'' === c+''|| b+'' === c+'')return false;
    //  三点垂直排列，斜率无法处理的情况
    if(a[0] === b[0] && a[0] === c[0] && b[0] === c[0]) return false;
    // 斜率不相同
    if(((b[1] - a[1]) / (b[0] - a[0])) !== ((c[1] - a[1]) / (c[0] - a[0]))){
        return true
    }else{
        return false;
    }
};

console.log(isBoomerang([[1,1],[2,2],[3,3]]))