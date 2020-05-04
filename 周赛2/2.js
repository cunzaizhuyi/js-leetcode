

var maxDiff = function(num) {
    let s = num + ''
    let a = s.split('')
    let max = 0;
    // 通过观察可知，最大数一定是用9替换掉某个数字
    for(let i = 0; i < a.length; i++){
        let s = '';
        for(let j = 0; j < a.length; j++){
            if (a[j] === a[i]){
                s += '9'
            }else{
                s += a[j]
            }
        }
        max = Math.max(max, s / 1);
    }

    // 最小数一定是用0或者1替换掉某个数字
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 1; i < a.length; i++){ // 从索引1开始，因为最终的数不能以0开头
        let s = a[0] + '';
        if(a[i] === a[0])continue; // 与首位相同不考虑
        for(let j = 1; j < a.length; j++){
            if (a[j] === a[i]){
                s += '0'
            }else{
                s += a[j]
            }
        }
        if (s.length !== a.length) continue; // 保险判断，if最终字符串长度不够，肯定不是最小的数
        min = Math.min(min, s / 1);
    }
    for(let i = 0; i < a.length; i++){
        let s = '';
        for(let j = 0; j < a.length; j++){
            if (a[j] === a[i]){
                s += '1'
            }else{
                s += a[j]
            }
        }
        min = Math.min(min, s / 1);
    }
    return max - min
};

// console.log(maxDiff(555))
// console.log(maxDiff(9))
// console.log(maxDiff(123456))
// console.log(maxDiff(10000))
// console.log(maxDiff(9288))
console.log(maxDiff(1101057)) //8808050