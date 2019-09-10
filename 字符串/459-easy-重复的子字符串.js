// 459 easy 重复的子字符串

// 给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
//
// 示例 1:
// 输入: "abab"
// 输出: True
// 解释: 可由子字符串 "ab" 重复两次构成。

// 示例 2:
// 输入: "aba"
// 输出: False

// 示例 3:
// 输入: "abcabcabcabc"
// 输出: True
// 解释: 可由子字符串 "abc" 重复四次构成。 (或者子字符串 "abcabc" 重复两次构成。)


/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length === 1) return false;

    let arr = [1]
    for(let i = 2; i <= ~~(s.length / 2); i++){
        if(s.length % i === 0){
            arr.push(i);
        }
    }
    for(let i = 0; i < arr.length; i++){
        let yueshu = arr[i];
        let count = s.length / yueshu;
        let index = 2;
        let flag = true
        while(index <= count){
            if(s.slice(yueshu * (index - 1), yueshu * index) !== s.slice(0, yueshu)){
                flag = false;
                break;
            }
            index++;
        }
        if(flag)return true;
    }
    return false
};
console.log(repeatedSubstringPattern('abcabcabc'))
