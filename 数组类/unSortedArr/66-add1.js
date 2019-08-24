// 定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
// 你可以假设除了整数 0 之外，这个整数不会以零开头。
//
// 示例 1:
// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。

// 示例 2:
// 输入: [4,3,2,1]
// 输出: [4,3,2,2]
// 解释: 输入数组表示数字 4321。

/**
 * 解法1，变成数字，问题是如果数字过大，超出语言的表示，就不行。比如[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
 * 转成数字在js中表示会出问题
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne2 = function(digits) {
    let count = Number(digits.join(''))
    count++
    let arr = (count + "").split('')
    arr = arr.map((item) => {
        return Number(item)
    })
    return arr;
};

console.log(plusOne2([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))


/**
 * 解法2：按照字符串相加
 * @param digits
 * @returns {number[]}
 */
var plusOne = function(digits) {
    for(let i = digits.length-1; i >= 0; i--){
        if (i === 0){
            if ((digits[i] + 1) % 10 === 0) {
                digits[i] = 0
                digits.unshift(1)
                break;
            } else {
                digits[i]++
                break
            }
        }
        if ((digits[i] + 1) % 10 === 0) {
            digits[i] = 0
        } else {
            digits[i]++
            break
        }
    }
    return digits
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
