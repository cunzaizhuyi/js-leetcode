// 874 easy 模拟行走机器人

// 机器人在一个无限大小的网格上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令：
// -2：向左转 90 度
// -1：向右转 90 度
// 1 <= x <= 9：向前移动 x 个单位长度
// 在网格上有一些格子被视为障碍物。
// 第 i 个障碍物位于网格点  (obstacles[i][0], obstacles[i][1])
// 如果机器人试图走到障碍物上方，那么它将停留在障碍物的前一个网格方块上，但仍然可以继续该路线的其余部分。
// 返回从原点到机器人的最大欧式距离的平方。
//
//
// 示例 1：
// 输入: commands = [4,-1,3], obstacles = []
// 输出: 25
// 解释: 机器人将会到达 (3, 4)
// 示例 2：
// 输入: commands = [4,-1,4,-2,4], obstacles = [[2,4]]
// 输出: 65
// 解释: 机器人在左转走到 (1, 8) 之前将被困在 (1, 4) 处
//  
//
// 提示：
// 0 <= commands.length <= 10000
// 0 <= obstacles.length <= 10000
// -30000 <= obstacle[i][0] <= 30000
// -30000 <= obstacle[i][1] <= 30000
// 答案保证小于 2 ^ 31


/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let dx = [0,1, 0, -1] // 北 东 南 西
    let dy = [1, 0, -1, 0]
    let x = 0, y = 0;
    let curDir = 0;

    // 用set存障碍物，更快查找
    let hash = {}
    for(let i = 0; i < obstacles.length; i++){
        hash[obstacles[i][0] + ',' + obstacles[i][1]] = true
    }


    let dis = 0; // 欧氏距离
    for(let i = 0; i < commands.length; i++){
        if(commands[i] === -2){
            curDir = (curDir + 3) % 4
        }else if(commands[i] === -1){
            curDir = (curDir + 1) % 4
        }else{
            let cmd = commands[i]
            for(let j = 1; j <= cmd; j++){
                let tmpx = x + dx[curDir]
                let tmpY = y + dy[curDir]
                if(hash[tmpx + ',' + tmpY]){
                    break;
                }else{
                    x = tmpx
                    y = tmpY
                    dis = Math.max(dis, (x*x + y*y))
                }
            }
        }
    }
    return dis;
};

// console.log(robotSim([4,-1,3], []))
console.log(robotSim([4,-1,4,-2,4], [[2,4]]))
