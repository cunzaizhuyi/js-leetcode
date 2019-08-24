// 389 easy 找不同
//
// 给定两个字符串 s 和 t，它们只包含小写字母。
// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
// 请找出在 t 中被添加的字母。
//
//
// 示例:
// 输入：
// s = "abcd"
// t = "abcde"
//
// 输出：
// e
//
// 解释：
// 'e' 是那个被添加的字母。


/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hashT = {}
    for(let i = 0; i < t.length; i++){
        if (!hashT[t[i]]) hashT[t[i]] = 1
        else hashT[t[i]]++;
    }

    let hashS = {}
    for(let i = 0; i < s.length; i++){
        if (!hashS[s[i]]) hashS[s[i]] = 1
        else hashS[s[i]]++;
    }

    for(let key in hashT){
        if(!hashS[key]) return key
        if (hashS[key] < hashT[key]) return key
    }
};

console.log(findTheDifference('abcd', 'abcde'))