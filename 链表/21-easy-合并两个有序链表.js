// 21 easy 合并两个有序链表

// 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
//
// 示例：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if(!l1)return l2;
    if(!l2)return l1;
    let newHead = new ListNode();
    let curNode = newHead;
    let flag = true
    while(flag){
        if(l1.val <= l2.val){
            curNode.next = new ListNode(l1.val)
            curNode = curNode.next;
            if(l1.next){
                l1 = l1.next;
            }else{
                l1 = null
                flag = false
            }
        }else{
            curNode.next = new ListNode(l2.val);
            curNode = curNode.next;
            if(l2.next){
                l2 = l2.next;
            }else{
                l2 = null;
                flag = false
            }
        }
    }
    if(l1){
        curNode.next = l1
    }else if(l2){
        curNode.next = l2
    }
    return newHead.next;
};