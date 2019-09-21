

/**
 * ❌
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (k === 1) return s;
    
    let arr = s.split('')
    let resultArr = []
    // 用 % 切分成两部分。
    let lastCount = arr.length % (2 * k)
    let lastArr = []
    if (lastCount){  
        lastArr = arr.slice(arr.length - lastCount)
        if (lastArr.length < k){ // 反转全部
            lastArr.reverse();
        } else { // 介于k 2k之间，只反转前K个
            lastArr = lastArr.slice(0, k + 1).reverse().concat(lastArr[k + 1])
        }
    }


    // 前部分
    let start = [0, k]
    while(start[0] < arr.length - lastCount){
        arr.slice(...start).reverse()
        start = [start[0] + k, start[1] + k]
    }

    return arr.slice(0, arr.length - lastCount).concat(lastArr).join('')
};

console.log(reverseStr('abcdefg', 2))