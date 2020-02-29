
// 55 easy 二叉树的深度

// 输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
//
// 例如：
//
// 给定二叉树 [3,9,20,null,null,15,7]，
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。
//
//  
//
// 提示：
//
// 节点总数 <= 10000


// 55
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // 先序遍历
    if (!root) return 0;
    let depth = 1;
    let dfs = (curNode, curDepth) => {
        if (curDepth > depth) depth = curDepth;
        if (curNode.left){
            dfs(curNode.left, curDepth + 1);
        }
        if (curNode.right){
            dfs(curNode.right, curDepth + 1);
        }
    };
    dfs(root, 1);
    return depth;
};
