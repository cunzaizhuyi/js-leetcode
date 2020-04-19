// 04.03 特定深度节点链表

// 给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。
// 返回一个包含所有深度的链表的数组。
//  
// 示例：
// 输入：[1,2,3,4,5,null,7,8]
//
//         1
//        /  \
//       2    3
//      / \    \
//     4   5    7
//    /
//   8
//
// 输出：[[1],[2,3],[4,5,7],[8]]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    let arr = [];
    let bfs = (nodeArr) => {
        let nextArr = [];
        let vhead = new ListNode()
        for(let i = 0; i < nodeArr.length; i++){
            vhead.next = new ListNode(nodeArr[i].val);
            if (nodeArr[i].left){
                nextArr.push(nodeArr[i].left);
            }
            if(nodeArr[i].right){
                nextArr.push(nodeArr[i].right);
            }
        }
        arr.push(vhead.next);
        if (!nextArr.length) return;
        bfs(nextArr);

    };
    bfs([tree]);
    return arr;
};