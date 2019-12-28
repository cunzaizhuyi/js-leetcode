// 17 medium 电话号码的字母组合

// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
//
//
//
// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 说明:
// 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
//


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits)return []
    let chars = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let s = ['']
    for (let i = 0; i < digits.length; i++){
        let number = digits[i] / 1;
        let sNew = []
        for (let k = 0; k < s.length; k++){
            for (let j = 0; j < chars[number].length; j++){
                sNew.push(s[k] + chars[number][j])
            }
        }
        s = sNew
    }
    return s;
};

console.log(letterCombinations('23'))