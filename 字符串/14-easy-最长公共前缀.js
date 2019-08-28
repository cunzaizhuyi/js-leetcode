// 14 easy 最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。
//
// 如果不存在公共前缀，返回空字符串 ""。
//
// 示例 1:
// 输入: ["flower","flow","flight"]
// 输出: "fl"

// 示例 2:
// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:
// 所有输入只包含小写字母 a-z 。


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return ''
    if(strs.length === 1) return strs[0]
    for(let i = 0; i < strs.length; i++){
        if(!strs[i]) return ''
    }
    let index = 0
    while(index < strs[0].length){
        let curChar = strs[0][index]
        for(let i = 1; i < strs.length; i++){
            if (strs[i][index] !== curChar) {
                return index ? strs[0].slice(0, index) : ''
            }
        }
        index++;
    }
    return strs[0]
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
