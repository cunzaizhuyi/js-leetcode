// 203 easy 移除链表元素

// 删除链表中等于给定值 val 的所有节点。
//
// 示例:
// 输入: 1->2->6->3->4->5->6, val = 6
// 输出: 1->2->3->4->5

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
var removeElements = function(head, val) {
    if(!head)return head;

    let vHead = new ListNode()
    vHead.next = head;

    let curNode = vHead
    while(curNode.next){
        if(curNode.next.val === val){
            if(curNode.next.next){
                // 没到链表结尾
                curNode.next = curNode.next.next;
            }else{
                // 到链表结尾了
                curNode.next = null
            }

        }else{
            curNode = curNode.next;
        }
    }
    return vHead.next;
};