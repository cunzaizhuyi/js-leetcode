// 给定一个Excel表格中的列名称，返回其相应的列序号。
// 例如，
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// 示例 1:
// 输入: "A"
// 输出: 1

// 示例 2:
// 输入: "AB"
// 输出: 28

// 示例 3:
// 输入: "ZY"
// 输出: 701


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let map = {};
    let start = 'A'.charCodeAt()
    let end = 'Z'.charCodeAt()
    let count = 1
    for(let i = start; i <=end; i++){
        map[String.fromCharCode(i)] = count;
        count++;
    }


    let arr = s.split('');
    let sum = 0;
    let j = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        sum += map[arr[i]] * Math.pow(26, j);
        j++;
    }
    return sum;
};

console.log(titleToNumber("AB"))