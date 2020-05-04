

var getCan = (s1, s2) => {
    let a1 = s1.split('')
    let a2 = s2.split('')
    a2.sort();

    let h = {};
    for(let i = 0; i < a1.length; i++){
        h[a1[i]] = ~~h[a1[i]] + 1;
    }
    for(let i = 0; i < a2.length; i++){
        let char = a2[i]
        while(1){
            if(h[char]){
                h[char]--;
                break;
            }else{
                if(char === 'z') return false;
                char = String.fromCharCode(char.charCodeAt(0) + 1);
            }
        }
    }
    return true;
}

var checkIfCanBreak = function(s1, s2) {
    let f1 = getCan(s1, s2);
    if (f1) {
        return f1;
    }else{
        return getCan(s2, s1);
    }
};