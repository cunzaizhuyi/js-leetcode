// 500 easy 键盘行


// 给定一个单词列表，只返回可以使用在键盘同一行的字母打印出来的单词。键盘如下图所示。

// 示例：
// 输入: ["Hello", "Alaska", "Dad", "Peace"]
// 输出: ["Alaska", "Dad"]
//
// 注意：
// 你可以重复使用键盘上同一字符。
// 你可以假设输入的字符串将只包含字母。


/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let arr = []
    for(let i = 0; i < words.length; i++){
        if (isOneKeyRow(words[i])){
            arr.push(words[i])
        }
    }
    return arr;
};


// 给你一个单词，判断是否可以用一个键盘行打印出来
function isOneKeyRow(word){
    let s = 'qwertyuiopQWERTYUIOP'
    let s2 = 'asdfghjklASDFGHJKL'
    let s3 = 'zxcvbnmZXCVBNM'
    let fn = (word, rowStr) => {
        for(let i = 0; i < word.length; i++){
            if (!rowStr.includes(word[i])){
                return false
            }
        }
        return true;
    }
    if (fn(word, s) || fn(word, s2) || fn(word, s3)){
        return true
    }
    return false;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));