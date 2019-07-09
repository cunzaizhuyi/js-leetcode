// 描述：给定一个字符串和行数，字符串从上到下，从左往右铺开。返回按行的结果
// helloworld
/*
* h   o   l
* e l w r d
* l   o
* */

/*
* h     o
* e   w r
* l o   l
* l     d
* */
function getZ(str, rowNumber){
    let arr = []
    for (let i = 0; i < rowNumber; i++) {
        let temp = []
        arr.push(temp)
    }
    let strArr = str.split('');
    let cur = 0
    let direction = 'down'
    strArr.forEach((char) => {
        if (cur === 0) {
            direction = 'down'
        }else if(cur === rowNumber - 1) {
            direction = 'up'
        }
        arr[cur].push(char)
        if (direction === 'down'){
            cur++;
        }else{
            cur--;
        }
    })
    return arr.join('').replace(/,/g, '')
}
// console.log(getZ('helloworld', 4))

function longCommonPrefix(str1, str2){
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    if (arr1.length === 0 || arr2.length === 0){
        return ''
    }
    let resultArr = []
    let i = 0
}