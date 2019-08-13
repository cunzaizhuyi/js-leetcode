// 67 easy 二进制求和

// 给定两个二进制字符串，返回他们的和（用二进制表示）。
// 输入为非空字符串且只包含数字 1 和 0。
//
// 示例 1:
// 输入: a = "11", b = "1"
// 输出: "100"

// 示例 2:
// 输入: a = "1010", b = "1011"
// 输出: "10101"


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let arr1 = a.split('')
    let arr2 = b.split('')
    // 补0
    if (arr1.length !== arr2.length){
        if (arr1.length > arr2.length){
            let diff = arr1.length - arr2.length
            for(let i = 0; i < diff; i++){
                arr2.unshift("0")
            }
        } else {
            let diff = arr2.length - arr1.length
            for(let i = 0; i < diff; i++){
                arr1.unshift("0")
            }
        }
    }

    // 求和
    let sumArr = []
    let isJinwei = false
    for(let i = arr1.length - 1; i >= 0; i--){
        let jinweiV = isJinwei ? 1: 0;
        if (Number(arr1[i]) + Number(arr2[i]) + jinweiV < 2){
            sumArr.unshift(Number(arr1[i]) + Number(arr2[i]) + jinweiV)
            isJinwei = false
        } else {
            sumArr.unshift(Number(arr1[i]) + Number(arr2[i]) + jinweiV - 2)
            isJinwei = true
        }
    }
    if(isJinwei){
        sumArr.unshift("1")
    }
    return sumArr.join('')
};

console.log(addBinary('1111', '1111'))



