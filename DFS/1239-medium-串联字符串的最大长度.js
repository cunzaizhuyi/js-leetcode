//1239. 串联字符串的最大长度 medium

// 给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，
// 那么它就是一个可行解。
// 请返回所有可行解 s 中最长长度。
//  
// 示例 1：
// 输入：arr = ["un","iq","ue"]
// 输出：4
// 解释：所有可能的串联组合是 "","un","iq","ue","uniq" 和 "ique"，最大长度为 4。
// 示例 2：
// 输入：arr = ["cha","r","act","ers"]
// 输出：6
// 解释：可能的解答有 "chaers" 和 "acters"。
// 示例 3：
// 输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
// 输出：26
//  
// 提示：
// 1 <= arr.length <= 16
// 1 <= arr[i].length <= 26
// arr[i] 中只含有小写英文字母

// 判断一个字符串里面有无重复字符
var hasRepeatChar = (str) => {
    let h = {}
    for(let i = 0; i < str.length; i++){
        if(h[str[i]])return true;
        h[str[i]] = true
    }
    return false;
}


/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    if(arr.length === 1){
        return hasRepeatChar(arr[0]) ? 0: arr[0].length
    }
    // 删除数组项自身包含重复元素的
    for (let i = arr.length - 1; i >= 0; i--) {
        if(hasRepeatChar(arr[i])){
            arr.splice(i, 1)
        }
    }
    let res = 0
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i!==j && !hasRepeatChar(arr[i] + arr[j])){
                res = Math.max(res, (arr[i] + arr[j]).length)
            }
        }
    }
    return res;
};