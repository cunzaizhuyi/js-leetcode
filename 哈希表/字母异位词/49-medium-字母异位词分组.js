// 49 medium 字母异位词分组
// 242题是简化版
//
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
//
// 示例:
//
//     输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
//         输出:
// [
//     ["ate","eat","tea"],
//     ["nat","tan"],
//     ["bat"]
// ]
// 说明：
//
// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
//



/**
 * @param {string[]} arr
 * @return {string[][]}
 */
var groupAnagrams = function(arr) {
    if (arr.length === 1) return [arr]

    let hash = {}
    for(let i = 0; i < arr.length; i++){
        let key = arr[i].split('').sort().join('')
        if(!hash[key]){
            hash[key] = [arr[i]]
        } else {
            hash[key].push(arr[i])
        }
    }
    return Object.values(hash)
};

console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
