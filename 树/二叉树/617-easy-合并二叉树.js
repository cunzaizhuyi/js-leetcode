// 617 easy 合并二叉树

// 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
// 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，
// 否则不为 NULL 的节点将直接作为新二叉树的节点。
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(!t1) return t2;
    if(!t2) return t1;

    let fn = (l, r) => {
        l.val = l.val + r.val;
        if(!l.left && !r.left && !l.right && !r.right){
            return;
        }

        if(l.left && r.left){
            fn(l.left, r.left)
        }
        if(l.right && r.right){
            fn(l.right, r.right);
        }
        if(l.left && !r.left){
            r.left = new TreeNode(0)
            fn(l.left, r.left)
        }
        if(!l.left && r.left){
            l.left = new TreeNode(0)
            fn(l.left, r.left)
        }
        if(l.right && !r.right){
            r.right = new TreeNode(0)
            fn(l.right, r.right)
        }
        if(!l.right && r.right){
            l.right = new TreeNode(0)
            fn(l.right, r.right)
        }
    }
    fn(t1, t2)
    return t1
};