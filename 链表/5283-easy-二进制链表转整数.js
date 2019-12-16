// 5283 easy 二进制链表转整数

//给你一个单链表的引用结点 head。链表中每个结点的值不是 0 就是 1。已知此链表是一个整数数字的二进制表示形式。
// 请你返回该链表所表示数字的 十进制值 。
//

// 输入：head = [1,0,1]
// 输出：5
// 解释：二进制数 (101) 转化为十进制数 (5)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if(!head)return 0;
    let str = '';
    let node = head
    while(true){
        if (!node) return parseInt(str, 2);
        str += node.val;
        node = node.next;
    }
};