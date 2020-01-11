// 841 medium 钥匙和房间

// 有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。
//
// 在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。
//
// 最初，除 0 号房间外的其余所有房间都被锁住。
//
// 你可以自由地在房间之间来回走动。
//
// 如果能进入每个房间返回 true，否则返回 false。
//
// 示例 1：
// 输入: [[1],[2],[3],[]]
// 输出: true
// 解释:
// 我们从 0 号房间开始，拿到钥匙 1。
// 之后我们去 1 号房间，拿到钥匙 2。
// 然后我们去 2 号房间，拿到钥匙 3。
// 最后我们去了 3 号房间。
// 由于我们能够进入每个房间，我们返回 true。

// 示例 2：
// 输入：[[1,3],[3,0,1],[2],[0]]
// 输出：false
// 解释：我们不能进入 2 号房间。

// 提示：
// 1 <= rooms.length <= 1000
// 0 <= rooms[i].length <= 1000
// 所有房间中的钥匙数量总计不超过 3000。
//


// [[1], [2], [3], []]
// [[1, 3], [2, 3], [1, 0], [0, 2]]
var canVisitAllRooms = (arr) => {
    if(arr.length === 1) return true;
    let flag = false;
    let reachArr = [];
    let fn = (arr, roomIndex, reachArr) => {
        if (reachArr.indexOf(roomIndex) === -1){
            reachArr.push(roomIndex);
        }
        if (reachArr.length === arr.length){
            flag = true;
            return;
        }
        for (let j = 0; j < arr[roomIndex].length; j++){
            if (reachArr.indexOf(arr[roomIndex][j]) > -1){
                continue;
            }
            fn(arr, arr[roomIndex][j], reachArr)
        }
    }
    // 如果第一间房子没钥匙，结束
    if (!arr[0].length) return false;
    // 第一间房子可达到
    reachArr.push(0);
    for (let j = 0; j < arr[0].length; j++){
        fn(arr, arr[0][j], reachArr);
    }
    return flag;
}
console.log(keyAndRoom([[1], [3], [2, 0], []]))
console.log(keyAndRoom([[1, 3], [2, 3], [1, 0], [0, 2]]))
console.log(keyAndRoom([[1,3],[3,0,1],[2],[0]]))
console.log(keyAndRoom([[2,3],[],[2],[1,3,1]]))