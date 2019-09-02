// 参考460 easy 汉明距离


var hammingDistance = function(x, y) {
    if(x === y) return 0;
    let bin1 = x.toString(2)
    let bin2 = y.toString(2)
    let lenDif = Math.abs(bin2.length - bin1.length);
    let zeroStr = '0'.repeat(lenDif);
    let minLong
    let maxNumberStr
    if (x > y) {
        minLong = zeroStr + bin2
        maxNumberStr = bin1
    } else {
        minLong = zeroStr + bin1
        maxNumberStr = bin2
    }
    let count = 0;
    for(let i = 0; i < minLong.length; i++){
        if(minLong[i] !== maxNumberStr[i]){
            count++
        }
    }
    return count;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            total += hammingDistance(nums[i], nums[j])
        }
    }
    return total
};

console.log(totalHammingDistance([4,14,2]))