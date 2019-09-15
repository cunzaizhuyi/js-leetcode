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
    if(rowNumber===1)return str
    // 初始化结果数组
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

    let res = ''
    for(let i = 0; i < arr.length; i++){
        res += arr[i].join('')
    }
    return res
}
// console.log(getZ('helloworld', 4))
console.log(getZ('A,B,c', 2))



// 发现fill方法的bug？
// 当你填充的是一个对象时，引用了同一个堆内存
// let testArr = Array(3)
// testArr.fill([])
// testArr[0].push(1)
// console.log(testArr[1])
// console.log(testArr[0] === testArr[1])