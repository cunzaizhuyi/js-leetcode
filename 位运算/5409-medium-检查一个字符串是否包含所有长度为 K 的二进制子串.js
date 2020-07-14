
// 5409. 检查一个字符串是否包含所有长度为 K 的二进制子串 medium


//给你一个二进制字符串 s 和一个整数 k 。
//
// 如果所有长度为 k 的二进制字符串都是 s 的子串，请返回 True ，否则请返回 False 。
//
//  
//
// 示例 1：
//
// 输入：s = "00110110", k = 2
// 输出：true
// 解释：长度为 2 的二进制串包括 "00"，"01"，"10" 和 "11"。它们分别是 s 中下标为 0，1，3，2 开始的长度为 2 的子串。
// 示例 2：
//
// 输入：s = "00110", k = 2
// 输出：true
// 示例 3：
//
// 输入：s = "0110", k = 1
// 输出：true
// 解释：长度为 1 的二进制串包括 "0" 和 "1"，显然它们都是 s 的子串。
// 示例 4：
//
// 输入：s = "0110", k = 2
// 输出：false
// 解释：长度为 2 的二进制串 "00" 没有出现在 s 中。
// 示例 5：
//
// 输入：s = "0000000001011100", k = 4
// 输出：false
//  
//
// 提示：
//
// 1 <= s.length <= 5 * 10^5
// s 中只含 0 和 1 。
// 1 <= k <= 20
//

var hasAllCodes = function(s, k) {
    for(let i = 0; i <= Math.pow(2, k) - 1; i++){
        let bin = i.toString(2).split('');
        while(bin.length < k){
            bin.unshift('0')
        }
        bin = bin.join('');
        if(s.indexOf(bin) === -1)return false;
    }
    return true;
};

// console.log(hasAllCodes('fd', 2))
