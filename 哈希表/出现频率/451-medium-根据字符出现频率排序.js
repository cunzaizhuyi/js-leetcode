


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let h = {}
    for(let i = 0; i < s.length; i++){
        if (!h[s[i]]) {
            h[s[i]] = 1
        } else {
            h[s[i]]++;
        }
    }
    
    // 构造二维数组
    let arr = []
    for(let key in h){
        let a = new Array(h[key])
        a.fill(key)
        arr.push(a);
    }
    
    // 排序
    arr.sort((a, b) => {
        return a.length > b.length ? -1: 1
    })
    
    // 拼接字符串
    let str = ''
    for(let i = 0; i < arr.length; i++){
        str += arr[i].join('')
    }
    return str;
};

console.log(frequencySort('tree'))