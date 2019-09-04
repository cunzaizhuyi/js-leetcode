// 111 easy 二叉树的最小深度

// 给定一个二叉树，找出其最小深度。
//
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
//
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例:
//
//     给定二叉树 [3,9,20,null,null,15,7],
//
//     3
//     / \
//   9  20
// /  \
//    15   7
// 返回它的最小深度  2.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return []

    let depth = 0
    let fn = (nodeArr) => {
        let nextLevelNodes = []
        let isStop = false
        nodeArr.forEach((node) => {
            if(!node.left && !node.right){
                isStop = true;
            }
            if(node.left){
                nextLevelNodes.push(node.left)
            }
            if(node.right){
                nextLevelNodes.push(node.right)
            }
        });
        if(isStop){
             return 0;
        } else if(nextLevelNodes.length){depth++; fn(nextLevelNodes)}
    }
    fn([root])
    return depth;
};