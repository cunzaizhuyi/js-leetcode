// 394 medium 字符串编码

// 给定一个经过编码的字符串，返回它解码后的字符串。
// 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
// 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
// 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
//
// 示例:
//     s = "3[a]2[bc]", 返回 "aaabcbc".
//     s = "3[a2[c]]", 返回 "accaccacc".
//     s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".

/**
 * 栈解法
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []
    for(let i = 0; i < s.length; i++){
        if (stack.length === 0 || s[i] !== ']'){
            if (/[0-9]/.test(s[i])){
                for(let l = i + 1; l < s.length; l++){
                    if (!/[0-9]/.test(s[l])) {
                        stack.push(s.slice(i, l))
                        i = l - 1;
                        break;
                    }
                }
            } else {
                stack.push(s[i]);
            }
            continue;
        }


        // 核心处理。找遇到的第一个数字。如果这个数字之前还有数据，就解密这个局部串，放入栈。
        // 如果这个数字之前没数据了，栈空，字符串累加
        for (let j = stack.length - 1; j >= 0; j--) {
            if (/[0-9]+/.test(stack[j])){
                if (j === 0){
                    let subStr = stack.slice(j + 2).join('').repeat(Number(stack[j]))
                    stack = []
                    for(let m = 0; m < subStr.length; m++){
                        stack.push(subStr[m])
                    }
                } else {
                    let subStr = stack.slice(j + 2).join('').repeat(Number(stack[j]))
                    let k = stack.length - 1
                    while(k !== j - 1){
                        stack.pop()
                        k--;
                    }
                    for(let p = 0; p < subStr.length; p++){
                        stack.push(subStr[p])
                    }
                }
                break;
            }
        }
    }
    return stack.join('')
};

// console.log(decodeString("3[a2[c]]"))
// console.log(decodeString('2[abc]3[cd]ef'))
console.log(decodeString("100[leetcode]"))