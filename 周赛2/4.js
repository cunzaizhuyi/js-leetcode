
var getCnt = (points, cord, r) => {
    let cnt = 0
    for(let i = 0; i < points.length; i++){
        let p = points[i]
        let a = (p[0] - cord[0]) * (p[0] - cord[0])
        let b = (p[1] - cord[1]) * (p[1] - cord[1])
        if((a + b) <= r * r){
            cnt++
        }
    }
    return cnt
}

var numPoints = function(points, r) {
    let l = points[0][0];
    let rr = points[0][0];
    let t = points[0][1];
    let b = points[0][1];
    for(let i = 1; i < points.length; i++){
        if(points[i][0] < l){
            l = points[i][0]
        }else if(points[i][0] > rr){
            rr = points[i][0]
        }
        if(points[i][1] > t){
            t = points[i][1]
        }else if(points[i][1] < b){
            b = points[i][1]
        }
    }

    let cnt = 0;
    for(let i = l; i <= rr; i += 0.1){
        for(let j = b; j <= t; j += 0.1){
            cnt = Math.max(cnt, getCnt(points, [i.toFixed(1)/1,j.toFixed(1)/1], r))
        }
    }
    return cnt;
};

console.log(numPoints([[-2,0],[2,0],[0,2],[0,-2]], 2))
console.log(numPoints([[1,2],[3,5],[1,-1],[2,3],[4,1],[1,3]],2))
console.log(numPoints([[-13,8],[-9,-1],[-17,-19],[20,-20],[-3,-4],[20,3],[3,-19],[15,20],[2,-11],[13,-17],[2,-12],[6,20],[1,-4],[14,-18],[15,-13],[20,-17],[9,6],[1,1],[20,16]],14))
console.log(numPoints([[-6,15],[-22,-15],[-15,-34],[-11,8],[-30,33],[-26,-1],[15,-35],[-1,-34],[-14,20],[28,-28],[24,18],[-36,28],[24,-28],[-14,-3],[21,5],[38,17],[-24,-16],[-4,-7],[25,-9],[-9,36],[-16,-26],[5,35],[36,19],[-16,-35],[37,25],[12,-33],[-8,12],[-24,-15],[36,-21],[7,9],[19,31],[15,24],[-17,-9],[-29,33],[25,-38],[-39,-24]]
,33))