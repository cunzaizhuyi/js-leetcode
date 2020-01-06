//1302. 层数最深叶子节点的和 medium

//给你一棵二叉树，请你返回层数最深的叶子节点的和。


// 宽度优先搜索BFS 解法
var deepestLeavesSum = (root) => {
    if (!root) return 0;
    let bfs = (nodes) => {
        let result = [];
        let hasSonNodes =  []
        for (let i = 0; i < nodes.length; i++){
            if (!nodes[i].left && !nodes[i].right){
                result.push(nodes[i].val)
            } else {
                if (nodes[i].left){
                    hasSonNodes.push(nodes[i].left);
                }
                if(nodes[i].right){
                    hasSonNodes.push(nodes[i].right);
                }
            }
        }
        if (!hasSonNodes.length){
            return result;
        }
        return bfs(hasSonNodes)
    }
    let result = bfs([root])

    return result.reduce((p, n) => {
        return p + n;
    }, 0)
}