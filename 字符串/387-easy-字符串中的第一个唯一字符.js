// easy 387 字符串中的第一个唯一字符
//
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
//
// 案例:
// s = "leetcode"
// 返回 0.
//
// s = "loveleetcode",
// 返回 2.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {}
    for(let i = 0; i < s.length; i++){
        if(!hash[s[i]]) hash[s[i]]=1
        else{
            hash[s[i]]++
        }
    }

    let index = 0
    while(index < s.length){
        if (hash[s[index]] === 1) return index;
        else{
            index++;
        }
    }
    return -1
};



console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('cc'));

