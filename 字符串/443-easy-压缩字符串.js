
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let index = 0
    while(index < chars.length){
        let flag = true
        for(let i = index; i < chars.length; i++){
            if(chars[index] !== chars[i] && i !== index + 1){
                let count = (i - index) + '';
                let len = count.length;
                for(let j = index + 1; j <= index + 1 + len; j++){
                    chars[j] = count[j - index - 1]
                }
                chars.splice(index, i - index - 1 - len)
                index += len;
                flag = false;
                break;
            }else if(chars[index] !== chars[i] && i === index + 1){
                index++;
                flag = false
                break;
            }
        }
        if(flag)index = chars.length;
    }
    return chars
};

console.log(compress(["a","a","b","b","c","c","c"]))