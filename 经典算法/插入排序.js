


let insertSort = (arr) => {
    if(!arr.length) return [];
    // 去拿第几个数，插入到前面的已排序队列中
    for (let i = 0; i < arr.length; i++){
        let toInsertNumber = arr[i];
        // 跟前面已排序好的 i个数 比较
        for (let j = i - 1; j >= 0; j--){
            if(toInsertNumber < arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}