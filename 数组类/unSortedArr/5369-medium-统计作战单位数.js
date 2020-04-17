// 5369 medium 统计作战单位数

//n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。
// 每 3 个士兵可以组成一个作战单位，分组规则如下：
// 从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]
// 作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，其中  0 <= i < j < k < n
// 请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分。
//
//  
//
// 示例 1：
//
// 输入：rating = [2,5,3,4,1]
// 输出：3
// 解释：我们可以组建三个作战单位 (2,3,4)、(5,4,1)、(5,3,1) 。
// 示例 2：
//
// 输入：rating = [2,1,3]
// 输出：0
// 解释：根据题目条件，我们无法组建作战单位。
// 示例 3：
//
// 输入：rating = [1,2,3,4]
// 输出：4
//  
//
// 提示：
//
// n == rating.length
// 1 <= n <= 200
// 1 <= rating[i] <= 10^5
//



// dfs超时
var numTeams = function(rating) {
    if(rating.length < 3)return 0;
    let res = [];
    let dfs = (step, curArr, arr, type) => {
        if(curArr.length === 3){
            if(res.indexOf(curArr) === -1){
                res.push([...curArr]);
            }
            return;
        }
        for(let i = step + 1; i < arr.length; i++){
            if (type === '1'){
                if(arr[i] > curArr[curArr.length - 1]){
                    curArr.push(arr[i]);
                    dfs(i, curArr, arr, type);
                    curArr.pop();
                }else{
                    continue;
                }
            }else{
                if(arr[i] < curArr[curArr.length-1]){
                    curArr.push(arr[i]);
                    dfs(i, curArr, arr, type);
                    curArr.pop();
                }else{
                    continue;
                }
            }
        }
    };
    for(let i = 0; i <= rating.length - 2; i++){
        dfs(i, [rating[i]], rating, '1') //升
        dfs(i, [rating[i]], rating, '2')
    }

    return res.length;
};


// 周赛比赛时的答案。需要继续优化，不需要那个分支
var numTeams2 = function(rating) {
    if(rating.length < 3)return 0;
    let res = 0
    let cur = []
    for(let i = 0; i <= rating.length - 3; i++){
        cur.push(rating[i])
        for(let j = i+1; j <= rating.length - 2; j++){
            if(rating[j] > cur[0]){
                cur.push(rating[j]);
                for(let k = j+1; k <= rating.length-1; k++){
                    if(rating[k] > cur[1]){
                        res++;
                    }
                }
                cur.pop()
            }else{
                cur.push(rating[j]);
                for(let k = j+1; k <= rating.length-1; k++){
                    if(rating[k] < cur[1]){
                        res++
                    }
                }
                cur.pop()
            }
        }
        cur.pop()
    }
    return res;
}

var numTeams3 = function(rating) {
    let cnt = 0
    for(let i = 0; i < rating.length; i++){
        for(let j = i+1; j < rating.length; j++){
            for(let k = j+1; k < rating.length; k++){
                if(rating[i] < rating[j] && rating[j] < rating[k]){
                    cnt++;
                }else if(rating[i] > rating[j] && rating[j] > rating[k]){
                    cnt++;
                }
            }
        }
    }
    return cnt;
}

console.log(numTeams([1,2,3,4]))