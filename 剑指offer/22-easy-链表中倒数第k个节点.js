
// 22 easy 链表中倒数第k个节点

// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，
// 即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，
// 从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。
//
//  
// 示例：
// 给定一个链表: 1->2->3->4->5, 和 k = 2.
// 返回链表 4->5.
//
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    // 双指针解法。两个指针保持K-1个节点的差距。当快指针到终点时，慢指针就在倒数第K个节点处
    let i = 0;
    let fast = head;
    let resultNode = head;
    while(i !== k - 1){
        fast = fast.next;
        i++;
    }
    while(fast.next){
        fast = fast.next;
        resultNode = resultNode.next;
    }
    return resultNode;
};