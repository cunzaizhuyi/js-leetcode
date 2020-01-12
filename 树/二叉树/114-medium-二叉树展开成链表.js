
// 114 medium 二叉树展开成链表

//给定一个二叉树，原地将它展开为链表。



/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    // 思路：将右子树挂在左子树最右的叶子节点上；将左子树放到右子树；递归前两步
    if(!root)return;
    let node = root;
    while(node){
        // 没有左子树，直接往下递归
        if (!node.left){
            node = node.right;
            continue;
        }
        // 拿到右子树
        let r = node.right;
        let l = node.left;
        // 找到左子树最右叶子
        let leaf = node.left;
        while(leaf.right){
           leaf = leaf.right;
        }
        // 把右子树 挂 左子树最右叶节点
        leaf.right = r;
        // 将左子树放到右子树
        node.right = l;
        node.left = null; // 别忘了

        // 递归下一个节点
        node = node.right;
    }
};