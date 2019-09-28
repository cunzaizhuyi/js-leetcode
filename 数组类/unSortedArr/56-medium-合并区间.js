// 56 medium 合并区间

// 给出一个区间的集合，请合并所有重叠的区间。
//
// 示例 1:
// 输入: [[1,3],[2,6],[8,10],[15,18]]
// 输出: [[1,6],[8,10],[15,18]]
// 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
// 示例 2:
// 输入: [[1,4],[4,5]]
// 输出: [[1,5]]
// 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。



/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return []
//    排序，按照第一个数
    intervals.sort((a, b) => {
        return a[0] - b[0]
    });
    
    let res = []
    let tmp = intervals[0]
    for(let i = 1; i < intervals.length; i++){
        if(intervals[i][0] <= tmp[1]){
            tmp[1] = Math.max(intervals[i][1], tmp[1]);
        }else{
            res.push(tmp);
            tmp = intervals[i]
        }
    }
    tmp[1] = Math.max(intervals[intervals.length-1][1], tmp[1]);
    res.push(tmp)
    return res;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))