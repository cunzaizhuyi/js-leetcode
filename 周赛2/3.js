
let isSub = (a1, a2) => {
    for(let i = 0; i < a1.length; i++){
        if(a2.indexOf(a1[i]) === -1){
            return false
        }
    }
    return true
}

var peopleIndexes = function(favoriteCompanies) {
    let res = []
    for(let i = 0; i < favoriteCompanies.length; i++){
        for(let j = 0; j < favoriteCompanies.length; j++){
            if(i!==j && isSub(favoriteCompanies[i], favoriteCompanies[j])){
                if(res.indexOf(i)===-1){
                    res.push(i)
                }
            }
        }
    }

    let aa = []
    for(let i = 0; i < favoriteCompanies.length; i++){
        aa.push(i)
    }
    for (let i = res.length - 1; i >= 0; i--) {
        aa.splice(res[i], 1)
    }
    return aa
};

console.log(peopleIndexes([["leetcode","google","facebook"],["google","microsoft"],["google","facebook"],["google"],["amazon"]]))