// 给定一个整数数组 A，只有我们可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。
// 形式上，如果我们可以找出索引 i+1 < j 且满足 (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1]) 就可以将数组三等分。
//
//  
// 示例 1：
// 输出：[0,2,1,-6,6,-7,9,1,2,0,1]
// 输出：true
// 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// 示例 2：
// 输入：[0,2,1,-6,6,7,9,-1,2,0,1]
// 输出：false

// 示例 3：
// 输入：[3,3,6,5,-2,2,5,1,-9,4]
// 输出：true
// 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4


// 方法1：暴力法，最后一个case，超时
function addPartion(arr, i, j){
	if (i === j) return arr[i]
	let sum = arr[i]
	for (let k = i + 1; k <= j; k++) {
		sum+=arr[k]
	}
	return sum;
}
function fun(arr){
	if (arr.length < 3)return false
	if (addPartion(arr, 0, arr.length - 1) % 3 !== 0) return false

	let flag = false;
	for (let i = 0; i <= arr.length - 3; i++) {
		let first = addPartion(arr, 0, i)
		for (let j = i+1; j <= arr.length - 2; j++) {
			let sec = addPartion(arr, i+1, j)
			let third = addPartion(arr, j+1, arr.length - 1)
			if (first === sec && sec === third){
				return true
			}
		}
	}
	return flag
}

// 方法2： 计算出现平均数的次数
function fun2(arr){
	let sum = arr.reduce((pre, next)=>{
		return pre+next
	}, 0)
	if (sum % 3 !== 0) return false

	let avg = sum / 3
	let count = 0
	let tmpSum = 0
	for (let i = 0; i < arr.length; i++) {
		tmpSum += arr[i]
		if(tmpSum === avg){
			count++
			tmpSum = 0
		}
	}
	return count > 0 && count % 3 === 0
}
console.log(fun2([0,2,1,-6,6,7,9,-1,2,0,1]))