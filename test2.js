

let obj = {
    a: {
        b: {
            c: 'sdfdsf'
        }
    }
}

let str = 'a.b.c';

function searchKey(obj, str){
    if (typeof obj !== 'object') return;

    // 分割字符串
    let arr = str.split('.'); // [a, b, c]

    let res;
    let dfs = (step, arr, obj) => {
        if (step > arr.length){
            return;
        }
        if (!obj[arr[step]]){
            return;
        }
        if (step === arr.length - 1 && obj[arr[step]]){
            return obj[arr[step]];
        } else {
            dfs(step + 1, arr, obj[arr[step]])
        }
    }
    dfs(0, arr, obj);

    return res;
}

console.log(searchKey(obj, str));