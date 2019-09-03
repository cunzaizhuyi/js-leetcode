// 513 medium 找树左下角的值
// 跟102 107题只差最后一行代码

// 给定一个二叉树，在树的最后一行找到最左边的值。
// 示例 1:
// 输入:
//
//     2
//     / \
//   1   3
//
// 输出:
//     1
//
//
// 示例 2:
// 输入:
//
//     1
//     / \
//       2   3
// /   / \
//     4   5   6
// /
// 7
//
// 输出:
//     7
// 注意: 您可以假设树（即给定的根节点）不为 NULL。


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
var findBottomLeftValue = function(root) {
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
    return arr[arr.length - 1][0];
};