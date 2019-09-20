// 796 easy 旋转字符串
//
// 给定两个字符串, A 和 B。
// A 的旋转操作就是将 A 最左边的字符移动到最右边。 例如, 若 A = 'abcde'，在移动一次之后结果就是'bcdea' 。
// 如果在若干次旋转操作之后，A 能变成B，那么返回True。
//
// 示例 1:
// 输入: A = 'abcde', B = 'cdeab'
// 输出: true
//
// 示例 2:
// 输入: A = 'abcde', B = 'abced'
// 输出: false

// 注意：
// A 和 B 长度不超过 100。

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(!A && !B) return true;
    if(A.length !== B.length) return false;
    for(let i = 1; i <= A.length - 1; i++){
        let translatedStr = '';
        translatedStr += A.slice(A.length - i);
        translatedStr += A.slice(0, A.length - i);
        if(translatedStr === B){
            return true;
        }
    }
    return false
};

console.log(rotateString('abcde', 'cdeab'))
console.log(rotateString('abcde', 'abced'))
console.log(rotateString("gcmbf",
"fgcmb"))