
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    let h = {}
    for(let i = 0; i <= n-1; i++){
        h[i] = []
    }
    for(let i = 0; i < roads.length; i++){
        h[roads[i][0]].push(roads[i][1])
        h[roads[i][1]].push(roads[i][0])
    }
    let m = 0;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let r = h[i].length + h[j].length;
            if(h[i].indexOf(j) !== -1 || h[j].indexOf(i) !== -1){
                r--;
            }
            m = Math.max(m, r);
        }
    }
    return m;
};

console.log('111: ', maximalNetworkRank(4,
    [[0,1],[0,3],[1,2],[1,3]]
))