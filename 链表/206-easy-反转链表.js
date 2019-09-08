// 206 easy 反转链表

// 反转一个单链表。
//
// 示例:
//
//     输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL
// 进阶:
//     你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
//


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head
    let arr = []
    let curNode = head;
    while(curNode){
        arr.push(curNode.val)
        curNode = curNode.next
    }
    head = new ListNode(arr.splice([arr.length - 1], 1))
    let cNode = head;
    while(arr.length){
        cNode.next = new ListNode(arr.splice(arr.length - 1, 1))
        cNode = cNode.next;
    }
    return head;
};