

/**
 * ❎
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let diffCount = 0
    let l = 0,r = s.length-1
    while(l < r){
        if(s[l] !== s[r]){
            diffCount++;
        }
        l++;
        r--;
    }
    return diffCount <= 1
};

console.log(validPalindrome('abca'))