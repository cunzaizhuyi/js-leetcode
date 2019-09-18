

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let s = 'balloon'
    let hash = {}
    for(let i = 0; i < text.length; i++){
        if(s.includes(text[i])){
            hash[text[i]] = (~~hash[text[i]]) + 1
        }
    }
    if(!hash['b'] || !hash['a'] || ~~hash['l'] < 2 || ~~hash['o'] < 2 || !hash['n']) return 0;
    hash['l'] = ~~(hash['l']/2)
    hash['o'] = ~~(hash['o']/2)
    return Math.min(...Object.values(hash))
};

console.log(maxNumberOfBalloons('leetcode'))