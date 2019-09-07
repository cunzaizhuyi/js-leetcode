

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, N) {
    
    for(let j = 1; j <= N; j++){

        let fn = (newArr) => {
            for(let i = 1; i < newArr.length - 1; i++){
                if((newArr[i-1] === 0 && newArr[i+1] === 0) ||
                    (newArr[i-1] === 1 && newArr[i+1] === 1)){
                    newArr[i] = 1
                } else {
                    newArr[i] = 0;
                }
            }
            return newArr
        }

        if(j === N){
            return newArr
        }
    }
};

console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 1))