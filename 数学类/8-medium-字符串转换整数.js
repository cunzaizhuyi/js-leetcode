
//8. 字符串转换整数 (atoi) medium
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let s = str.trim();

    if(s[0] === '+' || s[0] === '-'){
        if(s.length === 1)return 0;
    }else{
        if(/[^0-9]/.test(s[0])){
            return 0;
        }
    }
    let a = parseInt(s);
    if (a > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (a < Math.pow(-2, 31)) return Math.pow(-2, 31);
    return isNaN(a) ? 0: a;
};

console.log(myAtoi("   -42"))
