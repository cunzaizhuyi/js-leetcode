// 539-medium-最小时间差


// 给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并已分钟数表示。
//
// 示例 1：
// 输入: ["23:59","00:00"]
// 输出: 1
//
// 备注:
// 列表中时间数在 2~20000 之间。
// 每个时间取值在 00:00~23:59 之间。


/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    timePoints.sort()
    let minDiff = getDiff(timePoints[1], timePoints[0]);
    for(let i = timePoints.length - 1; i >= 0; i--){
        let diff
        if (i === 0) {
            diff = getDiff(timePoints[i], timePoints[timePoints.length - 1])
            if (diff < minDiff) {
                minDiff = diff
            }
            return minDiff
        }
        diff = getDiff(timePoints[i], timePoints[i - 1])
        if (diff < minDiff) {
            minDiff = diff
        }
    }
};

function getDiff(time1, time2) {
    let minute1, minute2;
    let arr1 = time1.split(':')
    let arr2 = time2.split(':')
    minute1 = arr1[0] * 60 + Number(arr1[1])
    minute2 = arr2[0] * 60 + Number(arr2[1] * 1)

    if ((minute1 - minute2)>=0){return minute1 - minute2}
    else {
        minute1 = (Number(arr1[0]) + 24) * 60 + Number(arr1[1])
        return minute1 - minute2
    }
}

console.log(findMinDifference(["01:39","10:26","21:43"]))




