// 160 easy 相交链表

// 编写一个程序，找到两个单链表相交的起始节点。
//
// 如下面的两个链表：
//
//
//
// 在节点 c1 开始相交。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 思路清奇。双指针，同步快慢。走两个链表的距离。
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA, q = headB
    while(p!==q){
        if(p) p = p.next;
        else p = headB;

        if(q) q = q.next;
        else q = headA
    }
    return p;
};