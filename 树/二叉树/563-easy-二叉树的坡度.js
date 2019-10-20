/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
    if(!root)return 0;

    // 递归部分
    let sumArr = [];
    let slope = (curNode) => {
        // 退出条件1  叶子节点
        if(!curNode.left && !curNode.right){
            sumArr.push(0);
            return curNode.val;
        }
        if(!curNode.left && curNode.right){
            let v = slope(curNode.right)
            sumArr.push(Math.abs(0-v));
            return v + curNode.val;
        }
        if(!curNode.right && curNode.left){
            let v = slope(curNode.left)
             sumArr.push(Math.abs(v - 0));
             return v + curNode.val;
        }
        if(curNode.left && curNode.right){
            let lsum= slope(curNode.left)
            let rsum= slope(curNode.right)
            let v = Math.abs(lsum - rsum)
             sumArr.push(v);
            return lsum + rsum + curNode.val;
        }
    };
    slope(root);

    // 求和部分
    return sumArr.reduce((p, n) => {
        return p + n;
    }, 0)
};