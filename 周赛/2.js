

var countTriplets = function(arr) {
    let res=0
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            for(let k = j; k < arr.length; k++){
                let a=0;
                let b=0;
                for(let m = i; m <=j-1; m++){
                    a = a ^ arr[m];
                }
                for(let n = j; n <=k; n++){
                    b = b ^ arr[n];
                }
                if (a === b){
                    res++
                }
            }
        }
    }
    return res;
};