
//面试题 16.21. 交换和


//给定两个整数数组，请交换一对数值（每个数组中取一个数值），使得两个数组所有元素的和相等。
//
// 返回一个数组，第一个元素是第一个数组中要交换的元素，第二个元素是第二个数组中要交换的元素。若有多个答案，返回任意一个均可。若无满足条件的数值，返回空数组。
//
// 示例:
//
// 输入: array1 = [4, 1, 2, 1, 1, 2], array2 = [3, 6, 3, 3]
// 输出: [1, 3]
// 示例:
//
// 输入: array1 = [1, 2, 3], array2 = [4, 5, 6]
// 输出: []
// 提示：
//
// 1 <= array1.length, array2.length <= 100000


var findSwapValues = function(array1, array2) {
    let s1 = array1.reduce((p, n) => {
        return p + n;
    });
    let s2 = array2.reduce((p, n) => {
        return p + n;
    });
    // 总和是奇数，没办法平分
    let avg = (s1 + s2) / 2;
    if(!Number.isInteger(avg))return [];

    let dif = (s1 - s2) / 2;
    for(let i = 0; i < array1.length; i++){
        if (array2.indexOf(array1[i] - dif) >= 0){
            return [array1[i], array1[i] - dif];
        }
    }
    return [];
};