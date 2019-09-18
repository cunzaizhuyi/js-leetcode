// easy 141 环形链表


// 给定一个链表，判断链表中是否有环。
//
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
// 如果 pos 是 -1，则在该链表中没有环。


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 快慢指针，如果能相遇，则是环内相遇。如果没环，是不会相遇的
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head)return false;
    let fast = head, slow = head;
    while(fast){
        fast = fast.next;
        slow = slow.next;
        if(fast) fast = fast.next;
        else return false;

        // 相遇了
        if(fast === slow){
            return true;
        }
    }
    return false;
};