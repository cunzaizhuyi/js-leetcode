// 583. 两个字符串的删除操作 medium

// 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
//
// 示例 1:
// 输入: "sea", "eat"
// 输出: 2
// 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
// 说明:
// 给定单词的长度不超过500。
// 给定单词中的字符只含有小写字母。
//

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let len1 = word1.length
    let len2 = word2.length
    if(!len1 && !len2)return 0;
    if(!len1) return len2;
    if(!len2) return len1;

    // 转化为求最长公共子序列
    let dp = []
    for(let i = 0; i < len1; i++){
        dp[i] = []
    }
    
    for(let i = 0; i < word1.length; i++){
        for(let j = 0; j < word2.length; j++){
            if(word1[i] === word2[j]){
                let v = dp[i-1] && dp[i-1][j-1] ? dp[i-1][j-1]: 0
                dp[i][j] = v + 1;
            }else{
                let v = dp[i-1] && dp[i-1][j] ? dp[i-1][j]: 0;
                let v2 = dp[i] && dp[i][j-1] ? dp[i][j-1] : 0;
                dp[i][j] = Math.max(v, v2)
            }
        }
    }
    return len1 + len2 - 2 * dp[len1-1][len2-1]
};

console.log(minDistance('sea', 'eat'))
console.log(minDistance('a', 'a'))