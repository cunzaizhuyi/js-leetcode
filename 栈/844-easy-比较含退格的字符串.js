


/**
 * 栈解法
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {

    let getStack = (S) => {
        let s = []
        for(let i = 0; i < S.length; i++){
            if (!s.length){
                if (S[i] !== '#'){
                    s.push(S[i])
                }
            } else {
                if (S[i] === '#'){
                    s.pop()
                } else {
                    s.push(S[i])
                }
            }
        }
        return s;
    }
    let stack1 = getStack(S)
    let stack2 = getStack(T)
   
    return stack1.join('') === stack2.join('')
};

console.log(backspaceCompare('ab#c', "ad#c"))