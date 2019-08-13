

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 0) return false;
    if(n ===1) return true;
    let index = 0
    while(true){
        if (n === 3) return true;
        n = n / 3
        if (n % 3 !== 0){
            return false
        }
        index++;
    }
};

console.log(isPowerOfThree(1))