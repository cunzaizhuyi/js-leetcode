// 38 easy 报数

// 报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
//
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 被读作  "one 1"  ("一个一") , 即 11。
// 11 被读作 "two 1s" ("两个一"）, 即 21。
// 21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
//
// 给定一个正整数 n（1 ≤ n ≤ 30），输出报数序列的第 n 项。
//
// 注意：整数顺序将表示为一个字符串。
//
//
// 示例 1:
// 输入: 1
// 输出: "1"

// 示例 2:
// 输入: 4
// 输出: "1211"


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1';
    let arr = ['any', '1']
    for(let i = 2; i <= n; i++){
        arr.push(baoshu(arr[i-1]))
    }
    return arr[n]
};

function baoshu(str){
    if (str.length === 1) return '1' + str;
    
    let arr = str.split('')
    let resultStr = ''
    let left = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i] !== arr[i+1]){
            resultStr += (i - left + 1) + arr[i]
            left = i + 1;
        }
    }
    return resultStr
}

console.log(countAndSay(5));