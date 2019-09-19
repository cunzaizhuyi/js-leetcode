// 1184 easy 公交站间的距离

// 环形公交路线上有 n 个站，按次序从 0 到 n - 1 进行编号。
// 我们已知每一对相邻公交站之间的距离，distance[i] 表示编号为 i 的车站和编号为 (i + 1) % n 的车站之间的距离。
// 环线上的公交车都可以按顺时针和逆时针的方向行驶。
// 返回乘客从出发点 start 到目的地 destination 之间的最短距离。


/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    let sum = distance.reduce((p, n) => {
        return p + n
    }, 0);
    
    let s = 0
    if(start<destination){
        for(let i = start; i < destination; i++){
            s += distance[i]
        }
    }else{
        for(let i = destination; i < start; i++){
            s += distance[i]
        }
    }

    
    return Math.min(s, sum - s)
};

console.log(distanceBetweenBusStops([1,2,3,4], 0, 1))
console.log(distanceBetweenBusStops([7,10,1,12,11,14,5,0],
7,
2))