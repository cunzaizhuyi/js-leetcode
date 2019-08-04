// 1002. 查找常用字符---easy

// 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。
// 例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
// 你可以按任意顺序返回答案。
//
// 示例 1：
// 输入：["bella","label","roller"]
// 输出：["e","l","l"]

// 示例 2：
// 输入：["cool","lock","cook"]
// 输出：["c","o"]
//
// 提示：
// 1 <= A.length <= 100
// 1 <= A[i].length <= 100
// A[i][j] 是小写字母

// 一个字符在字符串中出现的次数
function howMany(str, char){
	let count = 0
	for (let i = 0; i <str.length ; i++) {
		if(str[i] === char){
			count++
		}
	}
	return count;
}

function findChar(arr){
	let charAll = 'abcdefghijklmnopqrstuvwxyz'
	let result = []
	for (let j = 0; j < 26; j++) {
		let count = Number.MAX_SAFE_INTEGER
		for (let i = 0; i < arr.length; i++) {
			let nn = howMany(arr[i], charAll[j])
			if (nn < count){
				count = nn
			}
		}
		if (count !== 0){
			for (let i = 1; i <= count; i++) {
				result.push(charAll[j])
			}
		}
	}
	return result
}

console.log(findChar(['bella', 'label', 'roller']))
