
//08.01. 三步问题 easy


//三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。
// 实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。
//
// 示例1:
//
//  输入：n = 3
//  输出：4
//  说明: 有四种走法
// 示例2:
//
//  输入：n = 5
//  输出：13
// 提示:
// n范围在[1, 1000000]之间


/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
    if(n === 1)return 1;
    if(n === 2)return 2;
    if(n === 3)return 4;
    let t3 = 1;
    let t2 = 2;
    let t1 = 4;
    for(let i = 4; i <= n; i++){
        let t = (t1 + t2 + t3) % 1000000007;
        let tt = t1;
        let ttt = t2;
        t1 = t;
        t2 = tt;
        t3 = ttt;
    }
    return t1;
};