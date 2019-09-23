// 784 easy 字母大小写全排列

// 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。
//
// 示例:
// 输入: S = "a1b2"
// 输出: ["a1b2", "a1B2", "A1b2", "A1B2"]
//
// 输入: S = "3z4"
// 输出: ["3z4", "3Z4"]
//
// 输入: S = "12345"
// 输出: ["12345"]
// 注意：
// S 的长度不超过12。
// S 仅由数字和字母组成。


/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let arr = S.split('')
    let ans = [arr]
    for(let i = 0; i < arr.length; i++){
        if(/[a-zA-Z]/.test(arr[i])){
            let tmp = []
            for(let j = 0; j < ans.length; j++){
                ans[j][i] = revert(ans[j][i])
                tmp.push([...ans[j]])
                ans[j][i] = revert(ans[j][i])
            }
            ans.push(...tmp)
        }
    }
    return ans.map((arr) => {
        return arr.join('')
    })
};

function revert(char){
    if(/[a-z]/.test(char)){
        return char.toUpperCase()
    }else if(/[A-Z]/.test(char)){
        return char.toLowerCase()
    }
}

console.log(letterCasePermutation("a1b2"))