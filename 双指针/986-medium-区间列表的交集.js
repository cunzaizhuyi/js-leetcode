// 986 medium 区间列表的交集

// 给定两个由一些闭区间组成的列表，每个区间列表都是成对不相交的，并且已经排序。
// 返回这两个区间列表的交集。
// （形式上，闭区间 [a, b]（其中 a <= b）表示实数 x 的集合，而 a <= x <= b。
// 两个闭区间的交集是一组实数，要么为空集，要么为闭区间。例如，[1, 3] 和 [2, 4] 的交集为 [2, 3]。）

// 输入：A = [[0,2],[5,10],[13,23],[24,25]], B = [[1,5],[8,12],[15,24],[25,26]]
// 输出：[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
// 注意：输入和所需的输出都是区间对象组成的列表，而不是数组或列表。


/**
 * 双指针，谁的右边界短，往后移动一个
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    if(!A || !B) return [];
    let p1 = 0;
    let p2 = 0;
    let ans = [];
    while(p1 < A.length && p2 < B.length){
        // 比较，存数. 两种相交情况
        // 要么，A数的第二个点被B数包围；要么，B数的第二个点被A数包围
        if (A[p1][1] >= B[p2][0] && A[p1][1] <= B[p2][1]){
            ans.push([Math.max(A[p1][0], B[p2][0]), Math.min(A[p1][1], B[p2][1])])
        }else if(A[p1][0] <= B[p2][1] && B[p2][1] <= A[p1][1]){
            ans.push([Math.max(A[p1][0], B[p2][0]), Math.min(A[p1][1], B[p2][1])])
        }
        
        // 移动
        if(A[p1][1] === B[p2][1]){
            p1++;
            p2++;
        } else if (A[p1][1] < B[p2][1]) {
            p1++;
        } else {
            p2++;
        }
    }
    return ans;
};

console.log(intervalIntersection())