





var largestMultipleOfThree = function(digits) {
    digits.sort((a,b) => {
        return b-a;
    })
    let sum = digits.reduce((p,n) => {
        return p+n
    }, 0)
    if(sum % 3 === 0){
        if(digits[0] !== 0){
            return digits.join('')
        } else {
            return '0'
        }
    }
    for (let i = digits.length - 1; i >= 0; i--) {
        if ((sum - digits[i]) % 3 ===0){
            digits.splice(i, 1);
            if(digits[0] !== 0){
                return digits.join('')
            } else {
                return '0'
            };
        }
    }
    for (let i = digits.length - 1; i >= 1; i=i-2) {
        if ((sum - digits[i] - digits[i-1]) % 3 ===0){
            digits.splice(i - 1, 2);
            if(digits[0] !== 0){
                return digits.join('')
            } else {
                return '0'
            };
        }
    }
};
// console.log(largestMultipleOfThree([8,6,7,1,0]))
