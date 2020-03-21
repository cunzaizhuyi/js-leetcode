// 面试题 08.07. 无重复字符串的排列组合 medium

// 无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。
//
// 示例1:
//  输入：S = "qwe"
//  输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
// 示例2:
//  输入：S = "ab"
//  输出：["ab", "ba"]
// 提示:
// 字符都是英文字母。
// 字符串长度在[1, 9]之间。

var permutation = function(S) {
    if (!S.length) return [];
    let result = [];
    let curPath = [];
    let dfs = (arr) => {
        if (curPath.length === S.length){
            result.push(curPath.join(''));
            return;
        }
        for(let i = 0; i < arr.length; i++){
            if (curPath.indexOf(arr[i]) !== -1){
                continue;
            }
            curPath.push(arr[i]);
            dfs(arr);
            curPath.pop();
        }
    };
    dfs(S);
    return result;
};