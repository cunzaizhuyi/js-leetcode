// 205 easy 同构字符串
// 跟290单词规律一模一样
//
//
// 给定两个字符串 s 和 t，判断它们是否是同构的。
// 如果 s 中的字符可以被替换得到 t ，那么这两个字符串是同构的。
// 所有出现的字符都必须用另一个字符替换，同时保留字符的顺序。两个字符不能映射到同一个字符上，但字符可以映射自己本身。
//
// 示例 1:
// 输入: s = "egg", t = "add"
// 输出: true

// 示例 2:
// 输入: s = "foo", t = "bar"
// 输出: false

// 示例 3:
// 输入: s = "paper", t = "title"
// 输出: true
// 说明:
//     你可以假设 s 和 t 具有相同的长度。


/**
 * 思路：判断两个串是否长度一样，不一样，return false；
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
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

// console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('aa', 'ab'))
