// 49 medium 字母异位词分组
// 242题是简化版



/**
 * 哈希法判断 两个词是不是字母异位词
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
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if (strs.length === 1) return [strs]

    let findOneGroup = (arr) => {
        if (arr.length === 1) {
            let gArr = [arr[0]]
            arr.splice(0, 1)
            return gArr;
        }
        // 有两个及以上数据时
        let gArr = [arr[arr.length - 1]]
        let origin = arr.splice(arr.length - 1, 1)[0]
        for (let i = arr.length - 1; i >= 0; i--) {
            if (isAnagram(arr[i], origin)){
                gArr.push(arr[i])
                arr.splice(i, 1)
            }
        }
        return gArr;
    }

    let resultArr = []
    while(strs.length > 0){
        resultArr.push(findOneGroup(strs))
    }
    return resultArr;
};

// console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
