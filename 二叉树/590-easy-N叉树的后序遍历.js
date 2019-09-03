// 590 easy N叉树的后序遍历

// 给定一个 N 叉树，返回其节点值的后序遍历。
//
// 例如，给定一个 3叉树 :
//
//
//
//
//
//
//
//  返回其后序遍历: [5,6,3,2,4,1].
//
//
//
//  说明: 递归法很简单，你可以使用迭代法完成此题吗?


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return []
    let arr = []
    let curNode = root
    let fn = (curNode) => {
        if (curNode.children.length){
            for(let i = 0; i < curNode.children.length; i++){
                fn(curNode.children[i])
            }
        }
        arr.push(curNode.val);
    }
    fn(curNode)
    return arr
};