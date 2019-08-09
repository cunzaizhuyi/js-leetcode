// 345 easy 翻转字符串中的元音字母

// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
//
// 示例 1:
// 输入: "hello"
// 输出: "holle"

// 示例 2:
// 输入: "leetcode"
// 输出: "leotcede"

// 说明:
//     元音字母不包含字母"y"。


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(str) {
    if(!str.length) return ''
    if (str.length === 1) return str;

    let s = str.split('')
    let arr = ['a', 'e', 'i', 'o', 'u', "A", "E", "I", "O","U"];
    
    let last = s.length - 1
    let pre = 0
    while(true){
        if(pre >= last){
            return s.join('');
        }
        // 两个都是元音字母
        if(arr.includes(s[pre]) && arr.includes(s[last])){
            // 交换
            let temp = s[pre]
            s[pre] = s[last]
            s[last] = temp;
            last--;
            pre++;
            continue;
        }
        // 两个都不是元音字母
        if (!arr.includes(s[pre]) && !arr.includes(s[last])){
            last--;
            pre++;
            continue;
        }
        // 只有一个是元音字母
        if (arr.includes(s[pre]) && !arr.includes(s[last])){
            last--;
            continue;
        }
        if (!arr.includes(s[pre]) && arr.includes(s[last])){
            pre++;
        }
    }
};

console.log(reverseVowels("a."))


