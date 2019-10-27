/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(!s1.length) return true;
    if(!s2.length) return false;

    let arr = []; // 当前已经匹配的字符
    let s1Arr = s1.split('');
    for(let i = 0; i < s2.length; i++){
        // 碰到s1里面压根没有的字符
        if(s1Arr.indexOf(s2[i]) === -1 && s1.indexOf(s2[i]) === -1) {
            // 重置两个数组
            arr = [];
            s1Arr = s1.split('');
            continue;
        }

        arr.push(s2[i]);
        s1Arr.splice(s1Arr.indexOf(s2[i]), 1);
        if(arr.length === s1.length) return true;
    }
    return false;
};
// console.log(checkInclusion("hello", "ooolleoooleh"))
// console.log(checkInclusion("ab", "eidbaooo"))
console.log(checkInclusion("adc", "dcda"))