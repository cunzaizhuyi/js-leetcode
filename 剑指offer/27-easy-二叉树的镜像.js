// 27 easy 二叉树的镜像

// 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
//
// 例如输入：
//
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 镜像输出：
//
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
//
//  
//
// 示例 1：
// 输入：root = [4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
//
// 限制：
// 0 <= 节点个数 <= 1000

// 27 二叉树的镜像
var mirrorTree = function(root) {
    if (!root) return root;
    let nRoot = new TreeNode(root.val);
    let dfs = (curNode, nNode) => {
        if (curNode.left){
            nNode.right = new TreeNode(curNode.left.val);
            dfs(curNode.left, nNode.right);
        }
        if (curNode.right){
            nNode.left = new TreeNode(curNode.right.val);
            dfs(curNode.right, nNode.left);
        }
    };
    dfs(root, nRoot);
    return nRoot;
};