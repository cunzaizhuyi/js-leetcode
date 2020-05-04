//5386. 检查一个字符串是否可以打破另一个字符串 medium

//给你两个字符串 s1 和 s2 ，它们长度相等，请你检查是否存在一个 s1  的排列可以打破 s2 的一个排列，或者是否存在一个 s2 的排列可以打破 s1 的一个排列。
//
// 字符串 x 可以打破字符串 y （两者长度都为 n ）需满足对于所有 i（在 0 到 n - 1 之间）都有 x[i] >= y[i]（字典序意义下的顺序）。
//
//  
//
// 示例 1：
//
// 输入：s1 = "abc", s2 = "xya"
// 输出：true
// 解释："ayx" 是 s2="xya" 的一个排列，"abc" 是字符串 s1="abc" 的一个排列，且 "ayx" 可以打破 "abc" 。
// 示例 2：
//
// 输入：s1 = "abe", s2 = "acd"
// 输出：false
// 解释：s1="abe" 的所有排列包括："abe"，"aeb"，"bae"，"bea"，"eab" 和 "eba" ，s2="acd" 的所有排列包括："acd"，"adc"，"cad"，"cda"，"dac" 和 "dca"。然而没有任何 s1 的排列可以打破 s2 的排列。也没有 s2 的排列能打破 s1 的排列。
// 示例 3：
//
// 输入：s1 = "leetcodee", s2 = "interview"
// 输出：true
//  
//
// 提示：
//
// s1.length == n
// s2.length == n
// 1 <= n <= 10^5
// 所有字符串都只包含小写英文字母。


var maxDiff = function(num) {
    let s = num + ''
    let a = s.split('')
    let max = 0;
    // 通过观察可知，最大数一定是用9替换掉某个数字
    for(let i = 0; i < a.length; i++){
        let s = '';
        for(let j = 0; j < a.length; j++){
            if (a[j] === a[i]){
                s += '9'
            }else{
                s += a[j]
            }
        }
        max = Math.max(max, s / 1);
    }

    // 最小数一定是用0或者1替换掉某个数字
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 1; i < a.length; i++){ // 从索引1开始，因为最终的数不能以0开头
        let s = a[0] + '';
        if(a[i] === a[0])continue; // 与首位相同不考虑
        for(let j = 1; j < a.length; j++){
            if (a[j] === a[i]){
                s += '0'
            }else{
                s += a[j]
            }
        }
        if (s.length !== a.length) continue; // 保险判断，if最终字符串长度不够，肯定不是最小的数
        min = Math.min(min, s / 1);
    }
    for(let i = 0; i < a.length; i++){
        let s = '';
        for(let j = 0; j < a.length; j++){
            if (a[j] === a[i]){
                s += '1'
            }else{
                s += a[j]
            }
        }
        min = Math.min(min, s / 1);
    }
    return max - min
};

// console.log(maxDiff(555))
// console.log(maxDiff(9))
// console.log(maxDiff(123456))
// console.log(maxDiff(10000))
// console.log(maxDiff(9288))
console.log(maxDiff(1101057)) //8808050