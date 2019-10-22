


let bubble = (arr) => {
    if(!arr.length) return [];
    // n-1轮
    for (let i = 0; i < arr.length - 1; i++){
        // 每轮比较几次
        for (let j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j + 1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
// console.log(bubble([1,4,2,3,5]))