// 1375. 灯泡开关 III  medium

// 房间中有 n 枚灯泡，编号从 1 到 n，自左向右排成一排。最初，所有的灯都是关着的。
//
// 在 k  时刻（ k 的取值范围是 0 到 n - 1），我们打开 light[k] 这个灯。
//
// 灯的颜色要想 变成蓝色 就必须同时满足下面两个条件：
//
// 灯处于打开状态。
// 排在它之前（左侧）的所有灯也都处于打开状态。
// 请返回能够让 所有开着的 灯都 变成蓝色 的时刻 数目 。
//


// 维护最大最小值，每次开灯check一下
var numTimesAllBlue = function(light) {
    if(!light.length) return 0;
    let c = 0;
    let arr = []
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for(let i = 0; i < light.length; i++){
        arr.push(light[i])
        if (light[i] < min){
            min = light[i]
        }
        if(light[i]>max){
            max = light[i];
        }
        // 每次开灯check一下。满足下面条件就是左侧全亮
        if(max === i+1 && min===1 && arr.length === i+1){
            c++;
        }
    }
    return c;
};

console.log(numTimesAllBlue([4,1,2,3]))
