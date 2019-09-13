// 187 medium 重复的DNA序列
//
// 所有 DNA 由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。
// 在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。
// 编写一个函数来查找 DNA 分子中所有出现超多一次的10个字母长的序列（子串）。
//
// 示例:
// 输入: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// 输出: ["AAAAACCCCC", "CCCCCAAAAA"]
//
//


/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let hash = {}
    for(let i = 0; i + 10 <= s.length; i++){
        if(!hash[s.slice(i, i+10)]) hash[s.slice(i, i+10)] = 1
        else{
            hash[s.slice(i, i+10)]++;
        }
    }

    let arr = []
    for(let str in hash){
        if(hash[str] >= 2){
            arr.push(str)
        }
    }
    return arr;
};