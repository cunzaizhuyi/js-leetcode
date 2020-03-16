
// 1376. 通知所有员工所需的时间 medium

// 公司里有 n 名员工，每个员工的 ID 都是独一无二的，编号从 0 到 n - 1。公司的总负责人通过 headID 进行标识。
// 在 manager 数组中，每个员工都有一个直属负责人，其中 manager[i] 是第 i 名员工的直属负责人。对于总负责人，manager[headID] = -1。题目保证从属关系可以用树结构显示。
// 公司总负责人想要向公司所有员工通告一条紧急消息。他将会首先通知他的直属下属们，然后由这些下属通知他们的下属，直到所有的员工都得知这条紧急消息。
// 第 i 名员工需要 informTime[i] 分钟来通知它的所有直属下属（也就是说在 informTime[i] 分钟后，他的所有直属下属都可以开始传播这一消息）。
// 返回通知所有员工这一紧急消息所需要的 分钟数 。
//
//
// 示例 1：
// 输入：n = 1, headID = 0, manager = [-1], informTime = [0]
// 输出：0
// 解释：公司总负责人是该公司的唯一一名员工。


var numOfMinutes = function(n, headID, manager, informTime) {
    if(n===1)return informTime[0];

    // 转换manager数组为，每个领导有哪些下属的形式。形成父节点和子节点的更清晰的对应关系
    let hash = {};
    for(let i = 0; i < manager.length; i++){
        if(!hash[manager[i]])hash[manager[i]] = [];
        hash[manager[i]].push(i);
    }

    let max = 0;
    let dfs = (leadId, curTime) => {
        let next = hash[leadId];
        if(!next){
            max = Math.max(max, curTime);
            return;
        }
        for(let k = 0; k < next.length; k++){
            dfs(next[k], curTime + informTime[next[k]])
        }
    };
    dfs(headID, informTime[headID])
    return max;
};

console.log(numOfMinutes(11,
    4,
    [5,9,6,10,-1,8,9,1,9,3,4],
    [0,213,0,253,686,170,975,0,261,309,337]))

console.log(numOfMinutes(6,
    2,
    [2,2,-1,2,2,2],
    [0,0,1,0,0,0]))