// 82 medium 删除排序链表中的重复元素2
//
// 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
//
// 示例 1:
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5

// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head)return head;

    // 扫两遍，第一遍仅仅是记录哪些节点要删
    let hash = {[head.val]: 1}
    let curNode = head
    while(curNode.next){
        if(!hash[curNode.next.val]){
            hash[curNode.next.val] = 1
        }else{
            hash[curNode.next.val]++;
        }
        curNode = curNode.next;
    }


    // 第二遍
    let vHead = new ListNode()
    vHead.next = head;
    curNode = vHead
    while(curNode.next){
        if(hash[curNode.next.val] >1){
            if(curNode.next.next){
                curNode.next = curNode.next.next
            }else{
                curNode.next = null
            }
        }else{
            curNode = curNode.next;
        }
    }
    return vHead.next
};