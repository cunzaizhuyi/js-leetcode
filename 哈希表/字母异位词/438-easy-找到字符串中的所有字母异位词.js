


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
        if (isAnagram(s.slice(i, i + width), p)){
            arr.push(i)
        }
    }
    return arr
};

console.log(findAnagrams('cbaebabacd', 'abc'))

