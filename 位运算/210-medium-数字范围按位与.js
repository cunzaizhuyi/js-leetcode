
/**
 * 超时
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if(m === n) return n;
    let res = m;
    for(let i = m+1; i <= n; i++){
        res &= i;
    }
    return res
};


var rangeBitwiseAnd2 = function(m, n) {
    if(m === n) return n;
    let res = m;
    for(let i = m+1; i <= n; i++){
        res &= i;
    }
    return res
};

console.log(rangeBitwiseAnd2(0,1))
