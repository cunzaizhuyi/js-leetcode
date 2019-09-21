// 859 easy 亲密字符串

// 给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；
// 否则返回 false 。
//
// 示例 1：
// 输入： A = "ab", B = "ba"
// 输出： true
// 示例 2：
// 输入： A = "ab", B = "ab"
// 输出： false
// 示例 3:
// 输入： A = "aa", B = "aa"
// 输出： true
// 示例 4：
// 输入： A = "aaaaaaabc", B = "aaaaaaacb"
// 输出： true
// 示例 5：
// 输入： A = "", B = "aa"
// 输出： false
//
//
// 提示：
// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A 和 B 仅由小写字母构成。


/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(!A || !B) return false;
    if(A.length !== B.length) return false;
    if(A === B){
        //    只要有重复字母，就OK
        if(A.length > 26) return true;
        else {
            let hash = {}
            for(let i = 0; i < A.length; i++){
                hash[A[i]] = ~~hash[A[i]] + 1;
                if(hash[A[i]] > 1){
                    return true
                }
            }
        }
        return false;
    }

    let arr = []
    for(let i = 0; i < A.length; i++){
        if(A[i] !== B[i]){
            arr.push(i)
        }
    }
    if(arr.length === 1 || arr.length >= 3)return false
    else{
        if(A[arr[0]] === B[arr[1]] && A[arr[1]] === B[arr[0]]) return true
        else return false;
    }
};

console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"))
console.log(buddyStrings("ab", "ab"))
console.log(buddyStrings("abcd", "abcde"))