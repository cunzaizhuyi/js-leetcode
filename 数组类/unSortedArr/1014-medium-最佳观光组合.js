

/**
 * 暴力，超时
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair = function(A) {
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A.length; j++){
            if(i !== j){
                if(A[i] + A[j] - Math.abs(i - j) > max){
                    max = A[i] + A[j] - Math.abs(i - j)
                }
            }
        }
    }
    return max;
};



/**
 *
 * @param {number[]} A
 * @return {number}
 */
var maxScoreSightseeingPair2 = function(A) {
    if(!A.length) return 0;

    let res = 0 // A[0] - 0;
    let preMax = A[0]; // A[0] + 0;
    for(let i = 1; i < A.length; i++){
        res = Math.max(res, preMax + A[i] - i);
        preMax = Math.max(preMax, A[i] + i);
    }
    return res;
};

console.log(maxScoreSightseeingPair2([8,1,5,2,6]))