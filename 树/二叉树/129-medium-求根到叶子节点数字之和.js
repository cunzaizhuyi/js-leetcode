// 129. 求根到叶子节点数字之和 medium

// 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
// 例如，从根到叶子节点路径 1->2->3 代表数字 123。
// 计算从根到叶子节点生成的所有数字之和。
// 说明: 叶子节点是指没有子节点的节点。
//
// 示例 1:
// 输入: [1,2,3]
// 1
// / \
//   2   3
// 输出: 25
// 解释:
// 从根到叶子节点路径 1->2 代表数字 12.
// 从根到叶子节点路径 1->3 代表数字 13.
// 因此，数字总和 = 12 + 13 = 25.


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
var sumNumbers = function(root) {
    if(!root) return 0;

    let ans = []
    let fn = (cNode, val) => {
        if(!cNode.left && !cNode.right){
            ans.push(Number(val +''+ cNode.val))
        }
        if(cNode.left){
            fn(cNode.left, val +''+ cNode.val)
        }
        if(cNode.right){
            fn(cNode.right, val +''+ cNode.val)
        }
    };
    fn(root, '');

    return and.reduce((p,n) => {
        return p+n
    },0)
};