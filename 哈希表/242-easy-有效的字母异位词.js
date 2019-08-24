// 242 easy 有效的字母异位词


// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
//
// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true

// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false

// 说明:
//     你可以假设字符串只包含小写字母。
//
// 进阶:
//     如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？


/**
 * 哈希法
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let h1 = {}, h2 = {}
    for(let i = 0; i < s.length; i++){
        if (!h1[s[i]]) h1[s[i]] = 1
        else h1[s[i]]++;

        if (!h2[t[i]]) h2[t[i]] = 1
        else h2[t[i]]++;
    }

    for (const key in h1) {
        if (!h2[key] || h2[key] !== h1[key]){
            return false
        }
    }
    return true
};

console.log(isAnagram('anagram', 'nagaram'))