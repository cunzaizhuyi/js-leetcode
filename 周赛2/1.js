

var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let res = []
    for(let i = 0; i < candies.length; i++){
        if (candies[i] + extraCandies >= max){
            res[i] = true
        }else{
            res[i]=false
        }
    }
    return res;

};