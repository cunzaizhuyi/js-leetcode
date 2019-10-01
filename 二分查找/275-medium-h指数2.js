// 275 medium h指数2

// 给定一位研究者论文被引用次数的数组（被引用次数是非负整数），数组已经按照升序排列。编写一个方法，计算出研究者的 h 指数。
// h 指数的定义: “h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）至多有 h 篇论文分别被引用了至少 h 次。（其余的 N - h 篇论文每篇被引用次数不多于 h 次。）"
//
//
// 示例:
//     输入: citations = [0,1,3,5,6]
// 输出: 3
// 解释: 给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 0, 1, 3, 5, 6 次。
//      由于研究者有 3 篇论文每篇至少被引用了 3 次，其余两篇论文每篇被引用不多于 3 次，所以她的 h 指数是 3。
//
// 说明:
//     如果 h 有多有种可能的值 ，h 指数是其中最大的那个。


/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(!citations.length)return 0;
    if(citations.length === 1) return citations[0] >= 1?1:0;
    if(citations.length === 2) {
        let min = Math.min(...citations);
        let max = Math.max(...citations)
        if(max === 0)return 0;
        if(min >= 2) return 2;
        return 1;
    }
    let len = citations.length;
    let mid = ~~(len / 2);
    let l = 0, r = len - 1;
    while(l <= r){
        // youyi
        if(citations[mid] >= len - mid && citations[mid-1] < len - mid +1){
            return len - mid;
        }else if(citations[mid] >= len && mid === 0){
            return len;
        }else if(citations[mid] < len - mid){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
        mid = ~~((l + r) / 2);
    }
    return 0;
};

console.log(hIndex([0,0,4,4]))
console.log(hIndex([0,0,1]))
console.log(hIndex([0,0,2]))
console.log(hIndex([0,2,2]))
console.log(hIndex([7,7,7,7,7,7,7]))
console.log(hIndex([0,0,0]))