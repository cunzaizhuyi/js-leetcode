


/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    let times = 1;
    while(true){
        let temp = A.repeat(times);
        if(temp.indexOf(B) > -1){
            return times;
        }else{
            if(temp.length > 2 * B.length){
                return false;
            }
        }
        times++;
    }
};


console.log(repeatedStringMatch('abcd', "cdabcdab"))
