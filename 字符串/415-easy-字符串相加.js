// easy 415 字符串相加
//
// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
//
// 注意：
//
// num1 和num2 的长度都小于 5100.
// num1 和num2 都只包含数字 0-9.
// num1 和num2 都不包含任何前导零。
// 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let arr1 = num1.split('')
    let arr2 = num2.split('')
    // 补0
    if (arr1.length !== arr2.length){
        let diff = Math.abs(arr1.length - arr2.length)
        if (arr1.length > arr2.length){
            for(let i = 1; i <= diff; i++){
                arr2.unshift("0")
            }
        } else {
            // arr1加0
            for(let i = 1; i <= diff; i++){
                arr1.unshift("0")
            }
        }
    }
    // 相加
    let isJinwei = 0;
    let resultArr = []
    for (let i = arr1.length - 1; i >= 0; i--) {
        let a1 = Number(arr1[i]);
        let a2 = Number(arr2[i]);
        if (isJinwei + a1 + a2 < 10){
            resultArr.unshift(isJinwei + a1 + a2);
            isJinwei = 0;
        } else {
            resultArr.unshift(isJinwei + a1 + a2 - 10);
            isJinwei = 1;
        }
    }
    if (isJinwei){
        resultArr.unshift(1)
    }
    return resultArr.join('');
};

console.log(addStrings('1', '9'))