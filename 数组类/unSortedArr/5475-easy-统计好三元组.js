
// 5475. 统计好三元组 easy

//给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。
// 如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。
//
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// 其中 |x| 表示 x 的绝对值。
//
// 返回 好三元组的数量 。
//
//
// 示例 1：
// 输入：arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
// 输出：4
// 解释：一共有 4 个好三元组：[(3,0,1), (3,0,1), (3,1,1), (0,1,1)] 。
// 示例 2：
// 输入：arr = [1,1,2,2,3], a = 0, b = 0, c = 1
// 输出：0
// 解释：不存在满足所有条件的三元组。
//
// 提示：
// 3 <= arr.length <= 100
// 0 <= arr[i] <= 1000
// 0 <= a, b, c <= 1000

var countGoodTriplets = function(arr, a, b, c) {
    let cnt = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            for(let k = j + 1; k < arr.length; k++){
                if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[k] - arr[i]) <= c) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
};