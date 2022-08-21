

var buildArray = function(target, n) {
    let res = []
    let tmp = target[0];
    if (tmp !== 1){
        for(let i = 1; i < tmp; i++){
            res.push('Push')
            res.push('Pop')
        }
        res.push('Push');
    }else{
        res.push('Push')
    }

    for(let i = 1; i < target.length; i++){
        if (target[i] - target[i-1] === 1){
            res.push('Push')
        }else{
            let dif = target[i] - target[i-1];
            for(let i = 1; i < dif; i++){
                res.push('Push')
                res.push('Pop')
            }
            res.push('Push')
        }
    }
    return res;
};