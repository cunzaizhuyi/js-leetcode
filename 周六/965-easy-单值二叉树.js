

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let curNode = root;
    let v = curNode.val
    let fn = (node, v) => {
        if (node.val !== v){
            return false
        } else {
            if(node.left){
                fn(node.left, v);
            }
            if(node.right){
                fn(node.right, v);
            }
        }
        return true
    }
    return fn(curNode, v) !== false
};