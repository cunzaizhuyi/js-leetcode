

/**
 * 如果字符都是成偶数出现，直接返回全厂；有奇数次出现的，只能取一次
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hash = {}
    for(let i = 0; i < s.length; i++){
        if(!hash[s[i]])hash[s[i]]=1
        else{
            hash[s[i]]++
        }
    }
    
    let count = 0
    let useOdd = false;
    for(let key in hash){
        if (hash[key] % 2 === 0){
            count += hash[key]
        } else {
            if (!useOdd){
                count += hash[key]
                useOdd = true
            } else {
                let a = hash[key] > 1 ? hash[key] - 1 : 0
                count += a;
            }
        }
    }
    return count;
};

console.log(longestPalindrome('abccccdd'))