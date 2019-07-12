// 转数组方式
function longCommonPrefix(str1, str2){
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    if (arr1.length === 0 || arr2.length === 0){
        return ''
    }
    let resultArr = []
    let i = 0
    while(i !== arr1.length && i !== arr2.length){
        if (arr1[i] === arr2[i]) {
            resultArr.push(arr1[i])
        } else {
            return resultArr
        }
        i++
    }
    return resultArr
}

// 非数组方式
function longCommonPrefix2 (s1, s2) {
    if (s1 === '' || s2 === ''){
        return ''
    }
    let i = 0
    while(i !== s1.length && i !== s2.length){
        if (s1.substring(0, i) !== s2.substring(0, i)){
            return s1.substring(0, i - 1)
        }
        i++;
    }
}


let s1 = 'hello'
let s2 = 'he34'
console.log(longCommonPrefix2(s1, s2));