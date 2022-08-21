

let arr2 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12]
]

let fn = (arr) => {
    let rowNumber = arr.length;
    let colNumber = arr[0].length;


    let printArr = [arr[0][0]];
    let rowIndex = 0;
    let colIndex = 0;
    let moveDirection = 'down';
    let hash = {'00': true}; // 记住遍历过的索引
    let total = rowNumber * colNumber - 1;
    while(total > 0){
        if (moveDirection === 'down'){
            if (rowIndex === rowNumber - 1){
                moveDirection = 'right'
                continue;
            } else if (hash[rowIndex + 1 + '' + colIndex]){
                moveDirection = 'right'
                continue;
            }
            rowIndex++;

        } else if (moveDirection === 'right') {
            if (colIndex === colNumber - 1){
                moveDirection = 'up'
                continue;
            } else if (hash[rowIndex + '' + (colIndex + 1)]){
                moveDirection = 'up'
                continue;
            }
            colIndex++;

        } else if (moveDirection === 'up'){
            if (rowIndex === 0){
                moveDirection = 'left'
                continue;
            } else if (hash[rowIndex - 1 + '' + colIndex]){
                moveDirection = 'left'
                continue;
            }
            rowIndex--;

        } else if (moveDirection === 'left'){
            if (colIndex === 0){
                moveDirection = 'down'
                continue;
            } else if (hash[rowIndex + '' + (colIndex - 1)]){
                moveDirection = 'down'
                continue;
            }
            colIndex--;
        }

        printArr.push(arr[rowIndex][colIndex]);
        hash[rowIndex + '' + colIndex] = true;

        total--;
    }

    return printArr;
}
console.log(fn(arr2));