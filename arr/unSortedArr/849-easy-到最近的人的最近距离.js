// 849 easy 到最近的人的最近距离
// 跟605种花问题一样


// 在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。
// 至少有一个空座位，且至少有一人坐在座位上。
// 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。
// 返回他到离他最近的人的最大距离。
//
// 示例 1：
// 输入：[1,0,0,0,1,0,1]
// 输出：2
// 解释：
// 如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
// 如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
// 因此，他到离他最近的人的最大距离是 2 。

// 示例 2：
// 输入：[1,0,0,0]
// 输出：3
// 解释：
// 如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
// 这是可能的最大距离，所以答案是 3 。

// 提示：
// 1 <= seats.length <= 20000
// seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。


/**
 * 分为边界逻辑和非边界逻辑。当（前、后）边界从0到1时，有几个零就是距离那个1几个人。
 * 非边界逻辑，即两个1之间的逻辑。1或2个0，到最近的人的距离是1，3或4个0，到最近的人的距离是2.
 * 所以两个1之间0的个数除以2的math.ceil是到最近的人的距离。
 * 最终，取两个边界 和 两1中间逻辑 三个数中的最大数
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    // 遍历一遍，找出最多的连续0
    let zeroCount = 0
    let last1
    for(let i = 0; i < seats.length; i++){
        if (seats[i] === 1){
            // 那就是碰到的第一个1
            if (last1 === undefined){
                last1 = i;
            } else {
                let newZeroCount = i - last1 - 1
                if (newZeroCount > zeroCount){
                    zeroCount = newZeroCount;
                }
                last1 = i;
            }
        }
    }

    // 单独处理边界逻辑
    let leftDistance = seats.indexOf(1)
    let rightDistance = (seats.length - 1) - seats.lastIndexOf(1)
    return Math.max(Math.ceil(zeroCount / 2), leftDistance, rightDistance)
};


console.log(maxDistToClosest([1,0,0,0,1,0,1]))