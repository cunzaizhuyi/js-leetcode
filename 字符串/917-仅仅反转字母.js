// 917 easy 仅仅反转字母
//
// 给定一个字符串 S，返回 “反转后的” 字符串，其中不是字母的字符都保留在原地，而所有字母的位置发生反转。
//
// 示例 1：
// 输入："ab-cd"
// 输出："dc-ba"

// 示例 2：
// 输入："a-bC-dEf-ghIj"
// 输出："j-Ih-gfE-dCba"

// 示例 3：
// 输入："Test1ng-Leet=code-Q!"
// 输出："Qedo1ct-eeLg=ntse-T!"

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let arr = S.split('')

    let prev = 0;
    let next = arr.length - 1;
    let reg = /[a-zA-Z]/
    while(true){
        if (prev >= next) {
            return arr.join('')
        }
        // 两个字符都是英文字母
        if (reg.test(arr[prev]) && reg.test(arr[next])){
            [arr[prev], arr[next]] = [arr[next], arr[prev]]
            prev++;
            next--;

        //    只有前面的字符是英文字母
        } else if (reg.test(arr[prev]) && !reg.test(arr[next])){
            next--;
        } else if(!reg.test(arr[prev]) && reg.test(arr[next])){
            prev++;
        }else if(!reg.test(arr[prev]) && !reg.test(arr[next])){
            prev++;
            next--;
        }
    }
};