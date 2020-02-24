// 32 easy 从上到下打印二叉树2

// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。
//
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：
//
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
//  
//
// 提示：
// 节点总数 <= 1000

// 面试题32 - 从上到下打印二叉树2
var levelOrder2 = function(root) {
    if (!root) return []
    let result = [];
    let nodes = [root];
    let bfs = (nodes) => {
        let curLevelVal = [];
        let nextLevelNodes = []
        for(let i = 0; i < nodes.length; i++){
            curLevelVal.push(nodes[i].val);
            if (nodes[i].left){
                nextLevelNodes.push(nodes[i].left);
            }
            if (nodes[i].right){
                nextLevelNodes.push(nodes[i].right);
            }
        }
        result.push(curLevelVal);
        if (!nextLevelNodes.length) return;
        bfs(nextLevelNodes);
    };
    bfs(nodes);
    return result;
};
