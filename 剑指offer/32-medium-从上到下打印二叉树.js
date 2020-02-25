// 32 medium 从上到下打印二叉树1

// 从上到下打印出二叉树的每个节点，同一层的节点按照从左到右的顺序打印。
//
// 例如:
// 给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回：
//
// [3,9,20,15,7]
//  
//
// 提示：
//
// 节点总数 <= 1000
//


// 面试题32 - 从上到下打印二叉树
var levelOrder = function(root) {
    if (!root) return []
    // 用队列的形式层序遍历
    let result = [];
    let nodes = [root];
    while(nodes.length !== 0){
        if (nodes[0].left){
            nodes.push(nodes[0].left);
        }
        if (nodes[0].right){
            nodes.push(nodes[0].right);
        }
        result.push(nodes[0].val);
        nodes.shift();
    }
    return result;
};