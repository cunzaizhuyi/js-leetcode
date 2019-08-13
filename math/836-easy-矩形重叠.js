// 836 easy 矩形重叠
//
// 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。
//
// 如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。
//
// 给出两个矩形，判断它们是否重叠并返回结果。
//
// 示例 1：
// 输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// 输出：true

// 示例 2：
// 输入：rec1 = [0,0,1,1], rec2 = [1,0,2,1]
// 输出：false

// 说明：
// 两个矩形 rec1 和 rec2 都以含有四个整数的列表的形式给出。
// 矩形中的所有坐标都处于 -10^9 和 10^9 之间。

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let [x1, y1, x2, y2] = rec1;
    let [x3, y3, x4, y4] = rec2;
    let XoverlayDistance = twoLineSeparate(x1, x2, x3, x4)
    let YoverlayDistance = twoLineSeparate(y1, y2, y3, y4)
    if (XoverlayDistance === 0 || YoverlayDistance === 0) {
        return false
    }
    return true
};

// 某方向上重叠距离
function twoLineSeparate(p1, p2, p3, p4){
    let len1 = p2 - p1;
    let len2 = p4 - p3;
    let max = Math.max(p1, p2, p3, p4)
    let min = Math.min(p1, p2, p3, p4)
    // 相离
    if (max - min >= len1 + len2){
        return 0
        // 1包含2
    } else if (max - min === len1){
        return len2
        // 2包含1
    } else if(max - min === len2){
        return len1
    } else {
        // 相交
        return (len1 + len2) - (max - min)
    }
}

console.log(isRectangleOverlap([0,0,2,2], [1,1,3,3]))