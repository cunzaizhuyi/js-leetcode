// 1079 medium 活字印刷

//你有一套活字字模 tiles，其中每个字模上都刻有一个字母 tiles[i]。返回你可以印出的非空字母序列的数目。
//
// 示例 1：
// 输入："AAB"
// 输出：8
// 解释：可能的序列为 "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA"。
// 示例 2：
// 输入："AAABBC"
// 输出：188
//  
// 提示：
// 1 <= tiles.length <= 7
// tiles 由大写英文字母组成
//

/**
 * @param {string} str
 * @return {number}
 */
var numTilePossibilities = function(str) {
    if(!str)return 0;
    if(str.length === 1) return 1;

    let hash = {[str[0]]: true}
    for (let j = 1; j < str.length; j++){
        let obj = {}
        let newChar = str[j];
        // 如果是之前未出现过的字符，存obj；
        if(!hash[newChar]) obj[newChar] = true;
        for (let key in hash){
            // 待插入newChar的字符串
            let toInsetStr = key;
            for (let i = 0; i < toInsetStr.length; i++){
                let concatStr = toInsetStr.substring(0, i) + newChar + toInsetStr.substring(i);
                if(!hash[concatStr]) obj[concatStr] = true;
            }
            if(!hash[toInsetStr + newChar]) obj[toInsetStr + newChar] = true;
        }
        // 将object集成到hash里
        Object.assign(hash, obj);
    }
    // return hash;
    return Object.values(hash).length;
};
