// 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
// 在杨辉三角中，每个数是它左上方和右上方的数的和。
//
// 示例:
// 		输入: 5
// 输出:
// 		[
// 			[1],
// 			[1,1],
// 			[1,2,1],
// 			[1,3,3,1],
// 			[1,4,6,4,1]
// 		]

function f(n){
	if (n === 0) return []
	if (n === 1) return [[1]]
	if (n === 2) return [[1], [1,1]]
	let result = [[1], [1,1]]
	for (let i = 3; i <= n; i++) {
		let preArr = result[i - 2]
		let iRow = [1]
		for (let j = 0; j <= preArr.length - 2; j++) {
			iRow.push(preArr[j] + preArr[j + 1])
		}
		iRow.push(1)
		result.push(iRow)
	}
	return result
}

console.log(f(5))