


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    if (!head) return head;
    let vhead = new ListNode();
    vhead.next = head;
    let curNode = vhead;
    while(curNode.next){
        if (curNode.next.val === val){
            curNode.next = curNode.next.next;
            return vhead.next;
        }
        curNode = curNode.next;
    }
};