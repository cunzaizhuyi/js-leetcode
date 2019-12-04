// 257 easy 二叉树的所有路径

// 给定一个二叉树，返回所有从根节点到叶子节点的路径。
// 说明: 叶子节点是指没有子节点的节点。


// 示例：
// 输出: ["1->2->5", "1->3"]
// 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return [];
    let res = [];
    let curPath = `${root.val}`
    // 使用深搜
    let dfs = (curNode, curPath) => {
        if (!curNode.left && !curNode.right){
            res.push(curPath)
        }
        if (curNode.left){
            dfs(curNode.left, curPath + `->${curNode.left.val}`)
        }
        if (curNode.right){
            dfs(curNode.right, curPath + `->${curNode.right.val}`)
        }
    };
    dfs(root, curPath);
    return res;
};