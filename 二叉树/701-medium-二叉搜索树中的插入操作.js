// 701 medium 二叉搜索树中的插入操作

// 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 保证原始二叉搜索树中不存在新值。
// 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。
//
// 例如,
//     给定二叉搜索树:
//
// 4
// / \
//       2   7
// / \
//     1   3
//
// 和 插入的值: 5
// 你可以返回这个二叉搜索树:
//
//     4
//     /   \
//       2     7
// / \   /
// 1   3 5
// 或者这个树也是有效的:
//
//     5
//     /   \
//       2     7
// / \
//     1   3
//          \
//           4


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) {
        root = new TreeNode(val)
        return root;
    }

    let curNode = root
    let fn = (curNode) => {
        if (val < curNode.val) {
            if (!curNode.left) {
                curNode.left = new TreeNode(val)
                return root;
            } else {
                curNode = curNode.left
                return fn(curNode)
            }
        } else if (val > curNode.val) {
            if (!curNode.right) {
                curNode.right = new TreeNode(val)
                return root;
            } else {
                curNode = curNode.right
                return fn(curNode)
            }
        }
    }
    return fn(curNode)
};