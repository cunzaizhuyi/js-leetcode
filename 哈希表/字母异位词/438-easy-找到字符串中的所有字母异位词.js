


/**
 * 哈希法 超时
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

// 用排序的方式判断 是否是 字母异位词. 超时
var isAnagram2 = function(s, t) {
    if(s.length !== t.length) return false;

    let ss = s.split('').sort().join('')
    let tt = t.split('').sort().join('')
    return ss === tt;
};


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(!p) return []
    let arr = []
    let width = p.length;
    for(let i = 0; i < s.length; i++){
        if (isAnagram2(s.slice(i, i + width), p)){
            arr.push(i)
        }
    }
    return arr
};

console.log(findAnagrams('cbaebabacd', 'abc'))

