// 589 easy N叉树的先序遍历
//
// 给定一个 N 叉树，返回其节点值的前序遍历。
// 例如，给定一个 3叉树 :
//
//
//
//
//
//
//
//     返回其前序遍历: [1,3,5,6,2,4]。
//
// 说明: 递归法很简单，你可以使用迭代法完成此题吗?



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
var preorder = function(root) {
    if (!root) return []
    let arr = []
    let curNode = root
    let fn = (curNode) => {
        arr.push(curNode.val);
        if (curNode.children.length){
            for(let i = 0; i < curNode.children.length; i++){
                fn(curNode.children[i])
            }
        }
    }
    fn(curNode)
    return arr
};