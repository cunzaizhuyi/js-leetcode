// 22 medium 括号生成


//给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
//
// 例如，给出 n = 3，生成结果为：
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
//


var bracket = (n) => {
    let result = []
    // 递归共有两个出口，合法出口 和 不合法出口。
    let dfs = (left, right, str, result) => {
        // 右括号多于左括号， 比如)))((， 这种情况，必然不合法
        if (left > right) {return;}
        else if (left === 0 && right === 0){
            // 合法出口
            result.push(str)
        }else {
            // 需要继续递归下去的情况
            if (left > 0){
                dfs(left - 1, right, str + '(', result);
            }
            if (right > 0){
                dfs(left, right - 1, str + ')', result);
            }
        }
    }
    dfs(n, n, '', result);
    return result;
}
console.log(bracket(3))