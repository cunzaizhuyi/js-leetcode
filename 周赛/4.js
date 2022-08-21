

//
var ways = function(pizza, k) {
    let pizza2 = [];
    for(let i = 0; i < pizza.length; i++){
        pizza2.push(pizza[i].split(''));
    }

    let cnt = 0;

    let dfs = (resArr, time) => {
        if (time === k-1){
            for(let i = 0; i < resArr.length; i++){
                if(resArr[i].indexOf('A')>=0){
                    cnt++; return;
                }
            }
            return;
        }
        // 按行
        for(let i = 0; i < resArr.length-1; i++){
            let f = false
            for(let j = 0; j <= i; j++){
                if (resArr[j].indexOf('A') >= 0){
                    f = true
                }
            }
            if (!f){continue}


            dfs(resArr.slice(i + 1), time+1)
        }
        // 按列
        for(let j = 0; j < resArr[0].length-1; j++){
            let f = false;
            for(let i = 0; i < resArr.length; i++){
                for(let k = 0; k <= j; k++){
                    if (resArr[i][k] === 'A'){
                        f = true
                    }
                }
            }
            if(!f)continue;

            // 处理列
            let arr = [];
            for(let i = 0; i < resArr.length; i++){
                arr[i] = resArr[i].slice(j+1);
            }
            dfs(arr, time+1)
        }
    };
    dfs(pizza2, 0);

    return cnt % (10^9 + 7);
};

console.log(ways([".A..A","A.A..","A.AA.","AAAA.","A.AA."],
5))