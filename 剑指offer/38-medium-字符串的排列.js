// 38 medium 字符串的排列

// 输入一个字符串，打印出该字符串中字符的所有排列。
// 你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。
// 
// 示例:
// 输入：s = "abc"
// 输出：["abc","acb","bac","bca","cab","cba"]
// 
// 限制：
// 1 <= s 的长度 <= 8

let permutation = (s) => {
    let vis = [];
    let res = [];
    let dfs = (step, curP) => {
        if (step === s.length){
            if(res.indexOf(curP)===-1){
                res.push(curP);
            }
            return;
        }
        for (let i = 0; i < s.length; i++){
            if (vis[i] === true) continue;
            vis[i] = true;
            dfs(step + 1, curP + s[i]);
            vis[i] = false;
        }
    }
    dfs(0, '');
    return res;
}
console.log(permutation('abc'))