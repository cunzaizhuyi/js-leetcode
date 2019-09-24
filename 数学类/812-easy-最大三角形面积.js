// 812. 最大三角形面积 easy

// 给定包含多个点的集合，从其中取三个点组成三角形，返回能组成的最大三角形的面积。
//
// 示例:
// 输入: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
// 输出: 2
// 解释:
// 这五个点如下图所示。组成的橙色三角形是最大的，面积为2。



function getLen(p1, p2){
    return Math.sqrt((p1[1] - p2[1]) * (p1[1] - p2[1]) + (p1[0] - p2[0]) * (p1[0] - p2[0]))
}

/**
 * 海伦公式
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let max = 0;
    for(let i = 0; i < points.length; i++){
        for(let j = 0; j < points.length; j++){
            for(let k = 0; k < points.length; k++){
                if(i!==j && i !== k){
                    let a = getLen(points[i], points[j])
                    let b = getLen(points[i], points[k])
                    let c = getLen(points[k], points[j])

                    let p = (a+b+c)/2
                    let area = Math.sqrt(p*(p-a)*(p-b)*(p-c))
                    if(area>max){
                        max = area;
                    }
                }
            }
        }
    }
    return max;
};