


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.s = []
    this.sortedArr = []

};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.s.push(x)

    let s = this.sortedArr
    if (s.length === 0) return s[0] = x;
    if (x <= s[0]) return s.unshift(x)
    if (x > s[s.length - 1]) return s.push(x)
    for(let i = 0; i < s.length; i++){
        if (x > s[i] && x <= s[i + 1]){
            this.sortedArr = [...s.slice(0, i + 1), x, ...s.slice(i + i)]
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let index = this.sortedArr.findIndex((v) => {
        return v === this.s[this.s.length - 1]
    })
    this.sortedArr.splice(index, 1);

    this.s.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sortedArr[0]
};

let a = new MinStack()
a.push(-2)
a.push(0)
a.push(-1)
console.log(a.getMin());