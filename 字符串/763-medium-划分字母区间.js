// 763. 划分字母区间 medium

// 字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。
// 返回一个表示每个字符串片段的长度的列表。
//
// 示例 1:
// 输入: S = "ababcbacadefegdehijhklij"
// 输出: [9,7,8]
// 解释:
// 划分结果为 "ababcbaca", "defegde", "hijhklij"。
// 每个字母最多出现在一个片段中。
// 像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
// 注意:
// S的长度在[1, 500]之间。
// S只包含小写字母'a'到'z'。
//

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    if(!S.length) return []
    
    let i = 0;
    let ans = []
    let curRange = [0, 0]
    while(i <= S.length){
        if(i >= curRange[0] && i<= curRange[1]){
            curRange[1] = Math.max(curRange[1], S.lastIndexOf(S[i]))
        }else{
            ans.push(curRange[1] - curRange[0] + 1);
            curRange[0] = i;
            curRange[1] = i;
            continue;
        }
        i++;
    }
    return ans;
};

console.log(partitionLabels("ababcbacadefegdehijhklij"))