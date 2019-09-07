



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

