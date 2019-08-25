

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