// 226 easy 翻转二叉树
//
// 翻转一棵二叉树。
//
// 示例：
//
// 输入：
//
//      4
//      /   \
//   2     7
// / \   / \
// 1   3 6   9
// 输出：
//
//      4
//      /   \
//   7     2
// / \   / \
// 9   6 3   1
// 备注:
//     这个问题是受到 Max Howell 的 原问题 启发的 ：
//
// 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    let fn = (curNode) => {
        if(curNode.left && curNode.right){
            let temp = curNode.right;
            curNode.right = curNode.left;
            curNode.left = temp;
            fn(curNode.left);
            fn(curNode.right);
        }else if (curNode.left && !curNode.right){
            curNode.right = curNode.left;
            curNode.left = null
            fn(curNode.right)
        }else if (!curNode.left && curNode.right){
            curNode.left = curNode.right
            curNode.right = null;
            fn(curNode.left)
        }
    }
    fn(root)
    return root
};