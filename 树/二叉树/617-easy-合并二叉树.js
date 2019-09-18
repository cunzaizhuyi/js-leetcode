

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
    if(!t1)return t2;
    if(!t2)return t1;

    let cNode1 = t1;
    let cNode2 = t2;
    let tree = new TreeNode(t1.val + t2.val);

    let fn = (cNode1, cNode2, tree) => {
        if(cNode1.left || cNode2.left){
            tree.left = new TreeNode(~~cNode1.left.val + ~~cNode2.left.val);
        }
        if(cNode1.right || cNode2.right){
            tree.right = new TreeNode(~~cNode1.right.val + ~~cNode2.right.val);
        }
        fn(cNode1.left, cNode1.left, tree.left);
        fn(cNode1.right, cNode1.right, tree.right);
    }
    fn(cNode1, cNode2, tree)
    return tree;
};