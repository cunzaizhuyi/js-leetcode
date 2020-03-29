// 5349 medium 安排电影院座位

// 如上图所示，电影院的观影厅中有 n 行座位，行编号从 1 到 n ，且每一行内总共有 10 个座位，列编号从 1 到 10 。
// 给你数组 reservedSeats ，包含所有已经被预约了的座位。比如说，researvedSeats[i]=[3,8] ，它表示第 3 行第 8 个座位被预约了。
// 请你返回 最多能安排多少个 4 人家庭 。4 人家庭要占据 同一行内连续 的 4 个座位。
// 隔着过道的座位（比方说 [3,3] 和 [3,4]）不是连续的座位，但是如果你可以将 4 人家庭拆成过道两边各坐 2 人，这样子是允许的。

// 提示：
// 1 <= n <= 10^9
// 1 <= reservedSeats.length <= min(10*n, 10^4)
// reservedSeats[i].length == 2
// 1 <= reservedSeats[i][0] <= n
// 1 <= reservedSeats[i][1] <= 10
// 所有 reservedSeats[i] 都是互不相同的


// 每一行上，可以放几个家庭，一共就那么几种情况，枚举就可以。
let rowCnt = (arr) => {
    let a = [1,2,3,4,5,6,7,8,9,10];
    if (!arr.length) return 2;
    // 中间的4个座位。如果都没有预定，要考虑23和89。只有2389都没预定才返回2.
    if(!arr.includes(4) && !arr.includes(5) && !arr.includes(6) && !arr.includes(7)){
        if(arr.includes(2) || arr.includes(3) || arr.includes(8) || arr.includes(9)){
            return 1;
        }else{
            return 2;
        }
    }
    let c = 2;
    if (arr.includes(2) || arr.includes(3) || arr.includes(4) || arr.includes(5)){
        c--;
    }
    if(arr.includes(6) || arr.includes(7) || arr.includes(8) || arr.includes(9)){
        c--;
    }

    return c;
};

var maxNumberOfFamilies = function(n, reservedSeats) {
    let cnt = 0;
    reservedSeats.sort((a, b) => {
        return a[0] - b[0]
    });
    let arr = [reservedSeats[0][1]]
    let curRow = reservedSeats[0][0]
    // 空行的问题。某些整行都没人预定，则结果数 + 2 * 空行数
    if (curRow !== 1){
        cnt += 2 * (curRow - 1);
    }
    for(let i = 1; i < reservedSeats.length; i++){
        if(reservedSeats[i][0] === curRow){
            arr.push(reservedSeats[i][1])
        }else{
            if (reservedSeats[i][0] - curRow !== 1){
                cnt += 2 * (reservedSeats[i][0] - curRow - 1); // 中间空行
            }
            cnt += rowCnt(arr);
            arr = [reservedSeats[i][1]]
            curRow = reservedSeats[i][0]
        }
    }
    cnt += rowCnt(arr);
    // 最后一个有预定的行的 后面的空行
    if (curRow !== n){
        cnt += 2 * (n - curRow)
    }
    return cnt;
};

// console.log(maxNumberOfFamilies(3,[[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]]))
// console.log(maxNumberOfFamilies(2,[[2,1],[1,8],[2,6]]))
// console.log(maxNumberOfFamilies(4,[[4,3],[1,4],[4,6],[1,7]]))
// console.log(maxNumberOfFamilies(3,
//     [[2,3]]))
// console.log(maxNumberOfFamilies(5,
//     [[5,5],[5,8],[1,8],[3,10],[3,7],[5,7],[3,9],[5,10],[1,9],[4,2],[3,3],[3,4]]))
