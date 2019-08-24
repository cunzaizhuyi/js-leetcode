
// 种花问题
// 描述：相邻地块不能种
// 建模： [1,0,0,0,1] 1表示种花了，0表示没有
// 输入1，返回true。因为可以在中间种[1,0,1,0,1]

/**
 * 可以返回true，不可以返回false
 * @param arr 目前花坛种花与不种花的数据结构表示
 * @param n 让你再在花坛种n块花
 */
function fn (arr, n) {
	let start0Count = arr.indexOf(1)
	let end0Count = arr.length - arr.lastIndexOf(1) - 1
	let indexOf1 = []
	for (let i = arr.indexOf(1); i <= arr.lastIndexOf(1); i++) {
		if (arr[i] === 1){
			indexOf1.push(i)
		}
	}
	let pace = []
	for (let i = 1; i < indexOf1.length; i++) {
		pace.push(indexOf1[i] - indexOf1[i - 1] -1)
	}
	// 计算中间能种多少，两边能种多少，加起来就是总共能多少
	let interTotal = 0
	for (let i = 0; i < pace.length; i++) {
		interTotal+= Math.floor((pace[i] - 1) / 2)
	}
	let borderTotal = Math.floor(start0Count / 2 ) + Math.floor(end0Count / 2 )
	return interTotal + borderTotal >= n
}

let arr = [1,0,0,0,0,0,1]
console.log(fn(arr, 2));