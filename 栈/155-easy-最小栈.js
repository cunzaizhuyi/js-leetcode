// 155 easy 最小栈

// 设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。
//
// push(x) -- 将元素 x 推入栈中。
// pop() -- 删除栈顶的元素。
// top() -- 获取栈顶元素。
// getMin() -- 检索栈中的最小元素。

// 示例:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.
//


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