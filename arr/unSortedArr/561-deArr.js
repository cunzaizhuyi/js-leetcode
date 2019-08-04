// 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。
//
// 示例 1:
// 输入: [1,4,3,2]
// 输出: 4
// 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).

// 		提示:
// n 是正整数,范围在 [1, 10000].
// 		数组中的元素范围在 [-10000, 10000].


// 注意数组元素中有负数！！！导致直接sort()函数不对
function f (arr) {
	arr.sort((a,b)=>{return a-b})
	let sum = 0
	for (let i = 0; i < arr.length; i= i + 2) {
		sum+=arr[i]
	}
	return sum
}
console.log(f([-4, -3, -2, -1]));


// bug 返回：[-1,-2,-3,-4]
console.log([-4, -3, -2, -1].sort());