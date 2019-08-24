/**
 * 返回一个字符串无重复子串的长度
 * eg abcabccabba 3 abc
 * eg bebcwecdt   5 wecdt
 */
function getLongestSubStrLength(str){
    // 空串返回0
    if (!str.length) return 0

    let resultArr = []
    for(let i = 0; i < str.length; i++){
        if (!resultArr.includes(str[i])){
            resultArr.push(str[i])
        }
        let index = resultArr.indexOf(str[i])
        resultArr.splice(0, index)
    }
    return resultArr.length
}


console.log(getLongestSubStrLength('abcabccabba'))
console.log(getLongestSubStrLength('bebcwecdt'))
