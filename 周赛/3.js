

var minTime = function(n, edges, hasApple) {
    let parent = {};
    for(let i = 0; i < edges.length; i++){
        parent[edges[i][1]] = edges[i][0];
    }

    let cnt = 0;
    let vis = {};
    for(let i = 0; i < hasApple.length; i++){
        if (!hasApple[i])continue;
        if(hasApple[i] && i === 0)continue;
        let aa = i;
        while(parent[aa] !== 0){
            if (!vis[parent[aa] + ',' + aa]){
                vis[parent[aa] + ',' + aa] = true;
                cnt += 2;
            }
            aa = parent[aa];
        }
        if (!vis[parent[aa] + ',' + aa]){
            vis[parent[aa] + ',' + aa] = true;
            cnt += 2;
        }
    }
    return cnt
};

// console.log(minTime(4,
//     [[0,1],[1,2],[0,3]],
//     [true,true,true,true]))