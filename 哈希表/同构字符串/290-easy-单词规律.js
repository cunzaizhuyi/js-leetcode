// 290 单词规律 easy
// 跟205 同构字符串一模一样，只需要考虑变换一下 输入

// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。
// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
//
// 示例1:
// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true

// 示例 2:
// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false

// 示例 3:
// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false
// 示例 4:
// 输入: pattern = "abba", str = "dog dog dog dog"
// 输出: false

// 说明:
// 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。 



/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(s, str) {
    let t = str.split(' ')
    if (s.length !== t.length) return false;

    let map = new Map()
    for(let i = 0; i < s.length; i++){
        let values = [...map.values()]
        if (!map.has(s[i]) && !values.includes(t[i])){
            map.set(s[i], t[i])
        } else {
            if (map.has(s[i])){
                if (map.get(s[i]) !== t[i]) {
                    return false;
                }
            }else if(values.includes(t[i])){
                if ([...map.keys()][values.indexOf(t[i])] !== s[i]) {
                    return false;
                }
            }
        }
    }
    return true;
};


console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))