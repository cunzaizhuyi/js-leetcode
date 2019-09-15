

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let hash = {}
    for(let i = 0; i < words.length; i++){
        hash[words[i]] = ~~(hash[words[i]]) + 1
    }
    
    let kv = Object.entries(hash)
    kv.sort((a, b) => {
        if(a[1] < b[1]){
            return 1;
        }else{
            return -1;
        }
    })
    kv = kv.slice(0, k)
    kv.sort((a,b) => {
        return a[0] - b[0]
    })

    let arr = []
    for(let i = 0; i < kv.length; i++){
        arr.push(kv[i][0])
    }
    return arr;
};


console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))