// easy 126 验证回文串

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。
//
// 示例 1:
// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 示例 2:
// 输入: "race a car"
// 输出: false


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s === '')return true;
    
    let arr = []
    for(let i = 0; i < s.length; i++){
        if(/[0-9a-zA-Z]/.test(s[i])){
            arr.push(s[i].toLowerCase())
        }
    }
    
    let l = 0, r = arr.length - 1;
    while(l < r){
        if(arr[l]!== arr[r]){
            return false;
        }
        l++;
        r--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
