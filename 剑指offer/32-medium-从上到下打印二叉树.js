// 32 easy 从上到下打印二叉树1




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