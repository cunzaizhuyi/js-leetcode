// 1232 easy 缀点成线

//在一个 XY 坐标系中有一些点，我们用数组 coordinates 来分别记录它们的坐标，
// 其中 coordinates[i] = [x, y] 表示横坐标为 x、纵坐标为 y 的点。
//
// 请你来判断，这些点是否在该坐标系中属于同一条直线上
//

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(!coordinates)return true;
    if(coordinates.length <= 2) return true;

    let xie = xielv(coordinates[0], coordinates[1]);
    for(let i = 1; i < coordinates.length - 1; i++){
        if(xielv(coordinates[i], coordinates[i+1]) !== xie){
            return false;
        }
    }
    return true;
};

var xielv = (p1, p2) => {
    if(p1[0] === p2[0])return 1; // 两个垂直的点
    return (p1[1] - p2[1]) / (p1[0] - p2[0])
};