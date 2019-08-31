// 821 easy 字符的最短距离

// 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
//
// 示例 1:
// 输入: S = "loveleetcode", C = 'e'
// 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
// 说明:
// 字符串 S 的长度范围为 [1, 10000]。
// C 是一个单字符，且保证是字符串 S 里的字符。
// S 和 C 中的所有字母均为小写字母。
//


/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let posArr = []
    for(let i = 0; i < S.length; i++){
        if (S[i] === C){
            posArr.push(i);
        }
    }

    let result = []
    for(let i = 0; i < S.length; i++){
        let abs = S.length;
        for(let j = 0; j < posArr.length; j++){
            if(Math.abs(posArr[j] - i) < abs){
                abs = Math.abs(posArr[j] - i)
            }
        }
        result.push(abs)
    }
    return result
};

console.log(shortestToChar('loveleetcode', 'e'))