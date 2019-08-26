// 49 medium 字母异位词分组
// 242题是简化版



/**
 * 哈希法判断 两个词是不是字母异位词
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var isAnagram = function(a, b) {
    if (a.length !== b.length) return false;

    let hash = {}
    for (let i = 0; i < a.length; i++){
        if (!hash[a[i]]) hash[a[i]] = 1;
        else {
            hash[a[i]]++;
        }
    }

    for (let j = 0; j < b.length; j++){
        if (!hash[b[j]]) return false;
        else {
            if (hash[b[j]] > 1) {
                hash[b[j]]--;
            } else {
                delete hash[b[j]]
            }
        }
    }
    return true;

};


/**
 * @param {string[]} arr
 * @return {string[][]}
 */
var groupAnagrams = function(arr) {
    if (arr.length === 1) return [arr]

    let resultArr = []
    while(arr.length > 0){
        let group = [arr[arr.length - 1]];
        arr.splice(arr.length - 1, 1);
        for (let j = arr.length - 1; j >= 0; j--){
            if (isAnagram(arr[j], group[0])){
                group.push(arr[j]);
                arr.splice(j, 1);
            }
        }
        resultArr.push(group);
    }
    return resultArr
};

console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
