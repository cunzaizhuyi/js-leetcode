// 318. 最大单词长度乘积 medium

// 给定一个字符串数组 words，找到 length(word[i]) * length(word[j]) 的最大值，并且这两个单词不含有公共字母。
// 你可以认为每个单词只包含小写字母。如果不存在这样的两个单词，返回 0。
//
// 示例 1:
// 输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
// 输出: 16
// 解释: 这两个单词为 "abcw", "xtfn"。
// 示例 2:
// 输入: ["a","ab","abc","d","cd","bcd","abcd"]
// 输出: 4
// 解释: 这两个单词为 "ab", "cd"。
// 示例 3:
// 输入: ["a","aa","aaa","aaaa"]
// 输出: 0
// 解释: 不存在这样的两个单词。



/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    if(!words.length)return 0;
    let len = 0
    for(let i = 0; i < words.length; i++){
        for(let j = i + 1; j < words.length; j++){
            // 是否有重复字符
            if(!hasRepeatChar(words[i], words[j]) &&
                words[i].length * words[j].length > len){
                len = words[i].length * words[j].length
            }
        }
    }
};

var hasRepeatChar = (w1, w2) => {
    let hash = {}
    for(let i = 0; i < w1.length; i++){
        hash[w1[i]] = ~~hash[w1[i]] + 1;
    }
    for(let i = 0; i < w2.length; i++){
        if(hash[w2[i]]) return true;
    }
    return false
};