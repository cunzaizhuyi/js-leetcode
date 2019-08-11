// 223 medium 矩形面积

// 在二维平面上计算出两个由直线构成的矩形重叠后形成的总面积。
// 每个矩形由其左下顶点和右上顶点坐标表示，如图所示。

// 示例:
// 输入: -3, 0, 3, 4, 0, -1, 9, 2
// 输出: 45
// 说明: 假设矩形面积不会超出 int 的范围。

var computeArea = function(x1, y1, x2, y2, x3, y3, x4, y4) {
    let area1 = (x2 - x1) * (y2 - y1);
    let area2 = (x4 - x3) * (y4 - y3);
    let a = twoLineSeparate(x1,x2,x3,x4)
    let b = twoLineSeparate(y1,y2,y3,y4)
    return area1 + area2 - a * b
};

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

console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));