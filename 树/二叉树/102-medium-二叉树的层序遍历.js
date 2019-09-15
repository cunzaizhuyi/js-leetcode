// 102 medium 二叉树的层序遍历
// 跟107的代码只差最后一行

// 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
//
// 例如:
//     给定二叉树: [3,9,20,null,null,15,7],
//
//     3
//     / \
//   9  20
// /  \
//    15   7
// 返回其层次遍历结果：
//
// [
//     [3],
//     [9,20],
//     [15,7]
// ]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []

    let arr = []
    let fn = (nodeArr) => {
        let nextLevelNodes = []
        let curLevelNodeValues = []
        nodeArr.forEach((node) => {
            curLevelNodeValues.push(node.val)
            if(node.left){
                nextLevelNodes.push(node.left)
            }
            if(node.right){
                nextLevelNodes.push(node.right)
            }
        })
        arr.push(curLevelNodeValues);
        if(nextLevelNodes.length){fn(nextLevelNodes)}
    }
    fn([root])
    return arr;
};