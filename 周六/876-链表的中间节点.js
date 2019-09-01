

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
var middleNode = function(head) {
    let len = 0;
    let node = head
    while(node){
        len++;

        node = node.next;
    }

    let mid = ~~(len / 2)
    len = 0;
    node = head;
    while(node){
        if (len === mid) return node;
        len++;
        node = node.next;
    }

};