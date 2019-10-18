// 1029. 两地调度 easy

// 公司计划面试 2N 人。第 i 人飞往 A 市的费用为 costs[i][0]，飞往 B 市的费用为 costs[i][1]。
// 返回将每个人都飞到某座城市的最低费用，要求每个城市都有 N 人抵达。
//
// 示例：
// 输入：[[10,20],[30,200],[400,50],[30,20]]
// 输出：110
// 解释：
// 第一个人去 A 市，费用为 10。
// 第二个人去 A 市，费用为 30。
// 第三个人去 B 市，费用为 50。
// 第四个人去 B 市，费用为 20。
//
// 最低总费用为 10 + 30 + 50 + 20 = 110，每个城市都有一半的人在面试。
//  
// 提示：
// 1 <= costs.length <= 100
// costs.length 为偶数
// 1 <= costs[i][0], costs[i][1] <= 1000


/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    if(!costs.length) return 0;

    // 按照费用差排序
    costs.sort((a, b) => {
        return Math.abs(b[0] - b[1]) - Math.abs(a[0] - a[1]);
    });
    let sum = 0;
    let r = 0;
    let l = 0
    for(let i = 0; i < costs.length; i++){
        if(costs[i][0] > costs[i][1] && r < costs.length / 2){
            sum += costs[i][1];
            r++;
        }else if (costs[i][0] <= costs[i][1] && l < costs.length / 2){
            sum += costs[i][0];
            l++;
        }else if(r === costs.length/2){
            l++;
            sum += costs[i][0];
        }else{
            r++;
            sum += costs[i][1];
        }
    }
    return sum;
};

// console.log(twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))
// console.log(twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]))
console.log(twoCitySchedCost([[518,518],[71,971],[121,862],[967,607],[138,754],[513,337],
    [499,873],[337,387],[647,917],[76,417]]))










