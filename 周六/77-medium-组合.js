
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let arr = []
    for(let i = 1; i <= n; i++){
        arr.push(i)
    }

    let fn = (arr, count) => {
        if (arr.length && count === 1) return arr;
        count--;
        for(let i = 0; i < arr.length - k + 1; i++){
            let subArr = fn(arr.slice(i + 1), count)
            subArr.forEach((item) => {
                resultArr.push([arr[i]].concat([item]))
            })
        }
        return resultArr;
    }

    let resultArr = []
    return fn(arr, k)
};

console.log(combine(4, 3))