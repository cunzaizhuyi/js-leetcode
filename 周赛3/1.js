
var maxDepth = function(s) {
    let stack = [];
    let max = 0;
    for(let i = 0; i < s.length; i++){
        if (s[i] === ')'){
            stack.pop();
        } else if(s[i] === '('){
            stack.push(s[i]);
        }else{
            max = Math.max(max, stack.length);
        }
    }
    return max;
};