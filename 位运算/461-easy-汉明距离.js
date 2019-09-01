// 460 easy 汉明距离

// 两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。
// 给出两个整数 x 和 y，计算它们之间的汉明距离。
//
// 注意：
// 0 ≤ x, y < 231.
//
// 示例:
// 输入: x = 1, y = 4
// 输出: 2
//
// 解释:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
//
// 上面的箭头指出了对应二进制位不同的位置。



/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
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

console.log(hammingDistance(3,1))
