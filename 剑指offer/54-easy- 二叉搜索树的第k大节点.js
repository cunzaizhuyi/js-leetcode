// 54 easy 二叉搜索树的第K大节点

// 给定一棵二叉搜索树，请找出其中第k大的节点。
//
// 示例 1:
// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4
// 示例 2:
// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// 输出: 4
//  
//
// 限制：
// 1 ≤ k ≤ 二叉搜索树元素个数

// 54 二叉搜索树的第k大节点
var kthLargest = function(root, k) {
    // BST的中序遍历是递增数组
    let arr = [];
    let dfs = (curNode) => {
        if (curNode.left){
            dfs(curNode.left)
        }
        arr.push(curNode.val);
        if (curNode.right){
            dfs(curNode.right);
        }
    };
    dfs(root);
    return arr.reverse()[k - 1];
};

