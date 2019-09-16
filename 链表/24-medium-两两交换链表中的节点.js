// 24 medium 两两交换链表中的节点

// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
//
// 示例:
// 给定 1->2->3->4, 你应该返回 2->1->4->3.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 虚拟头节点
    let vHead = new ListNode();
    vHead.next = head;

    let curNode = vHead;
    while(curNode.next && curNode.next.next){
        let a = curNode.next;
        let b = a.next;
        curNode.next = b;
        a.next = b.next;
        b.next = a;

        // 向后推两个节点
        curNode = curNode.next.next;
    }
    return vHead.next;
};