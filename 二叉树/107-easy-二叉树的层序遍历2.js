// 107 easy 二叉树的层序遍历2
// 跟102题只差代码最后一行

// 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
//
// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],
//
// 3
// / \
//   9  20
// /  \
//    15   7
// 返回其自底向上的层次遍历为：
//
// [
//     [15,7],
//     [9,20],
//     [3]
// ]
//

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
var levelOrderBottom = function(root) {
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
    return arr.reverse();
};