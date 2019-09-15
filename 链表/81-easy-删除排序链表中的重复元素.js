// easy 81 删除排序链表中的重复元素

// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
//
// 示例 1:
// 输入: 1->1->2
// 输出: 1->2

// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3


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

    let hash = {[head.val]: true}
    let curNode = head
    while(curNode.next){
        // 只要已经有过，就删除
        while(hash[curNode.next.val]){
            if(curNode.next.next){
                // 删除下一个节点的方式1，直接指向下下个
                curNode.next = curNode.next.next
            }else{
                // 删除下个节点的方式2，因为无更后（下下个）节点，所以舍弃下个节点即可。
                curNode.next = null;
                return head;
            }
        }
        hash[curNode.next.val] = true;
        curNode = curNode.next;
    }
    return head
};