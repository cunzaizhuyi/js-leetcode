// easy 884 两句话中的不常见单词

// 给定两个句子 A 和 B 。 （句子是一串由空格分隔的单词。每个单词仅由小写字母组成。）
// 如果一个单词在其中一个句子中只出现一次，在另一个句子中却没有出现，那么这个单词就是不常见的。
// 返回所有不常用单词的列表。
// 您可以按任何顺序返回列表。
//
//
// 示例 1：
// 输入：A = "this apple is sweet", B = "this apple is sour"
// 输出：["sweet","sour"]

// 示例 2：
// 输入：A = "apple apple", B = "banana"
// 输出：["banana"]
//
// 提示：
// 0 <= A.length <= 200
// 0 <= B.length <= 200
// A 和 B 都只包含空格和小写字母。

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    let arr1 = A.split(' ')
    let arr2 = B.split(' ')

    let hash1 = {}
    for(let i = 0; i < arr1.length; i++){
        if (!hash1[arr1[i]]) hash1[arr1[i]] = 1
        else{
            hash1[arr1[i]]++
        }
    }

    let hash2 = {}
    for(let i = 0; i < arr2.length; i++){
        if (!hash2[arr2[i]]) hash2[arr2[i]] = 1
        else{
            hash2[arr2[i]]++
        }
    }

    let result = []
    for(let key in hash1){
        if (!hash2[key] && hash1[key] === 1) result.push(key)
    }
    for(let key in hash2){
        if (!hash1[key] && hash2[key] === 1) result.push(key)
    }
    return result
};

console.log(uncommonFromSentences('apple apple', 'banana'))