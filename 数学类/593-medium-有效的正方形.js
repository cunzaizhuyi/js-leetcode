//593. 有效的正方形 medium

//给定二维空间中四点的坐标，返回四点是否可以构造一个正方形。
//
// 一个点的坐标（x，y）由一个有两个整数的整数数组表示。
//
// 示例:
//
// 输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// 输出: True
//  
//
// 注意:
//
// 所有输入整数都在 [-10000，10000] 范围内。
// 一个有效的正方形有四个等长的正长和四个等角（90度角）。
// 输入点没有顺序。
//

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    let d1 = distance(p1, p2);
    let d2 = distance(p3, p2);
    let d3 = distance(p3, p4);
    let d4 = distance(p1, p4);
    let d5 = distance(p1, p3);
    let d6 = distance(p2, p4);
    let s = [d1, d2, d3, d4, d5, d6];
    s.sort((a, b) => {
        return a - b;
    })
    return s[0] === s[1] && s[1] === s[2] && s[2] === s[3] && s[4] === s[5] && s[4] !== s[1]
};

var distance = (a, b) => {
    let d2 = (a[0] - b[0]) * (a[0] - b[0]) +  (a[1] - b[1]) * (a[1] - b[1])
    return Math.sqrt(d2)
}

console.log(validSquare([0,0],
    [1,1],
    [1,0],
    [0,1]))