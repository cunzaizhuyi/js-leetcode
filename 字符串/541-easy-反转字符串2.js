// 541 easy 反转字符串2

//给定一个字符串和一个整数 k，你需要对从字符串开头算起的每个 2k 个字符的前k个字符进行反转。如果剩余少于 k 个字符，则将剩余的所有全部反转。如果有小于 2k 但大于或等于 k 个字符，则反转前 k 个字符，并将剩余的字符保持原样。
//
// 示例:
//
// 输入: s = "abcdefg", k = 2
// 输出: "bacdfeg"
// 要求:
//
// 该字符串只包含小写的英文字母。
// 给定字符串的长度和 k 在[1, 10000]范围内。
//

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (k === 1 || !k) return s;

    let arr = s.split('')
    let resultArr = []
    // 用 % 切分成两部分。
    let lastCount = arr.length % (2 * k)
    let lastArr = []
    if (lastCount){
        lastArr = arr.slice(arr.length - lastCount)
        if (lastArr.length < k){ // 反转全部
            lastArr.reverse();
        } else { // 介于k 2k之间，只反转前K个
            lastArr = lastArr.slice(0, k).reverse().concat(lastArr.slice(k))
        }
    }


    // 前部分
    let start = [0, k];
    let pre = arr.slice(0, arr.length - lastCount)
    while(start[0] < pre.length){
        let a = pre.slice(...start).reverse()
        for(let i = start[0]; i < start[1]; i++){
            pre[i] = a[i-start[0]]
        }
        start = [start[0] + 2*k, start[1] + 2*k]
    }

    return pre.concat(lastArr).join('')
};

console.log(reverseStr('abcdefghijklmn', 2))