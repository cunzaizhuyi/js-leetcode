// 648 medium 单词替换

// 在英语中，我们有一个叫做 词根(root)的概念，它可以跟着其他一些词组成另一个较长的单词——我们称这个词为 继承词(successor)。
// 例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。
// 现在，给定一个由许多词根组成的词典和一个句子。你需要将句子中的所有继承词用词根替换掉。
// 如果继承词有许多可以形成它的词根，则用最短的词根替换它。
// 你需要输出替换之后的句子。
//
// 示例 1:
// 输入: dict(词典) = ["cat", "bat", "rat"]
// sentence(句子) = "the cattle was rattled by the battery"
// 输出: "the cat was rat by the bat"

// 注:
// 输入只包含小写字母。
// 1 <= 字典单词数 <=1000
// 1 <=  句中词语数 <= 1000
// 1 <= 词根长度 <= 100
// 1 <= 句中词语长度 <= 1000


/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    dict.sort()
    let sArr = sentence.split(' ')
    for(let i = 0; i < sArr.length; i++){
        for(let j = 0; j < dict.length; j++){
            if(sArr[i].startsWith(dict[j])){
                sArr[i] = dict[j]
            }
        }
    }
    return sArr.join(' ')
};