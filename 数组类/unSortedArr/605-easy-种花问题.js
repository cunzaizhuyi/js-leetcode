// 605 easy 种花问题
// 跟849题一样


// 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
//
// 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。
//
// 示例 1:
// 输入: flowerbed = [1,0,0,0,1], n = 1
// 输出: True

// 示例 2:
// 输入: flowerbed = [1,0,0,0,1], n = 2
// 输出: False

// 注意:
// 数组内已种好的花不会违反种植规则。
// 输入的数组长度范围为 [1, 20000]。
// n 是非负整数，且不会超过输入数组的大小。

/**
 * 思路：区分边界和非边界两种情况。
 * 边界：0个0，1个0，可种花0； 两个0，3个0， 可种花1朵，以此类推。。。 0的个数 / 2 向下取整 是 边界可种花数
 * 非边界：1，2个0，可种0朵花；3，4个0，可种1朵花，以此类推，n个0可种 Math.ceil(n / 2) - 1
 * 总可种花数是边界加非边界可种数，然后跟n比较
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    let leftZeroNumber = flowerbed.indexOf(1)
    // case中 根本没有1的情况。。。哭了
    if (leftZeroNumber === -1){
        return Math.ceil(flowerbed.length / 2) >= n
    }
    let rightZeroNumber = flowerbed.length - flowerbed.lastIndexOf(1) - 1
    // 边界可种花数
    let borderNumber = Math.floor(leftZeroNumber / 2) + Math.floor(rightZeroNumber / 2);

    let innerNumber = 0
    let index = leftZeroNumber
    let l;
    while(index <= flowerbed.lastIndexOf(1)){
        if (flowerbed[index] === 1){
            if (l === undefined) {
                l = index;
            }else{
                let zeroNumber = index - l - 1;
                innerNumber += Math.ceil(zeroNumber / 2) - 1
                l = index;
            }
            index++;
        } else {
            index++
        }
    }
    return borderNumber + innerNumber >= n
};

console.log(canPlaceFlowers([1], 0))