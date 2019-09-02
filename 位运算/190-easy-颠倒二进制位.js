

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let bin = n.toString(2).split('')
    // let l = 0, r = bin.length - 1;
    // while(l < r){
    //     [bin[r], bin[l]] = [bin[l], bin[r]];
    //     l++;
    //     r--;
    // }
    bin.reverse()
    return parseInt(bin.join(''), 2)

};

console.log(reverseBits('00000010100101000001111010011100'))
// console.log(reverseBits('11111111111111111111111111111101'))