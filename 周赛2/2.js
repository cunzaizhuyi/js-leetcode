


var arrangeWords = function(text) {
    let arr = text.split(' ');
    // arr.sort((a,b) => {
    //     if(a.length === b.length){
    //         return 0
    //     }
    //     return a.length - b.length
    // })

    let len = 1
    let cnt = 0
    let aaa = []
    while(cnt < arr.length){
        for(let i = 0; i < arr.length; i++){
            if(arr[i].length === len){
                aaa.push(arr[i]);
                cnt++
            }
        }
        len++;
    }


    let f = aaa[0].split('')
    f[0] = f[0].toUpperCase()
    aaa[0] = f.join('');


    let r = aaa.join(' ')
    let n = r[0]
    for(let i = 1; i < r.length; i++){
        n += r[i].toLowerCase()
    }
    return n;
};

console.log(arrangeWords("Jtik hrzrvhbmk gbo cfhmiqwonj ojkew ufvledv bomoeqt ops jgi zdhvbpbb zczmepdfpm jry rjazc titttcu"))