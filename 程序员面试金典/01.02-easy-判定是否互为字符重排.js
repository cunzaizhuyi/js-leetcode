// 面试题 01.02.  判定是否互为字符重排  easy


//给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 //
 // 示例 1：
 //
 // 输入: s1 = "abc", s2 = "bca"
 // 输出: true
 // 示例 2：
 //
 // 输入: s1 = "abc", s2 = "bad"
 // 输出: false
 // 说明：
 //
 // 0 <= len(s1) <= 100
 // 0 <= len(s2) <= 100

var checkPermutation = function(s1, s2) {
    if (s1.length !== s2.length) return false;

    // 遍历s1，遇到每个共有字符，s2删除之。
    let arr2 = s2.split('');
    for(let i = 0; i < s1.length; i++){
        // 遇到仅仅s1有的字符，返回false
        if (arr2.indexOf(s1[i]) === -1) return false;
        arr2.splice(arr2.indexOf(s1[i]), 1);
    }
    return true;
};