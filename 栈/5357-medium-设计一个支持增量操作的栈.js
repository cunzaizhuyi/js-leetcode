// 设计一个支持增量操作的栈 5357 medium

// 请你设计一个支持下述操作的栈。
//
// 实现自定义栈类 CustomStack ：
//
// CustomStack(int maxSize)：用 maxSize 初始化对象，maxSize 是栈中最多能容纳的元素数量，栈在增长到 maxSize 之后则不支持 push 操作。
// void push(int x)：如果栈还未增长到 maxSize ，就将 x 添加到栈顶。
// int pop()：返回栈顶的值，或栈为空时返回 -1 。
// void inc(int k, int val)：栈底的 k 个元素的值都增加 val 。如果栈中元素总数小于 k ，则栈中的所有元素都增加 val 。
 

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.s = [];
    this.m = maxSize
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.s.length >= this.m){
        return this.s;
    }else{
        this.s.push(x);
        return this.s;
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.s.length === 0){
        return -1
    }else{
        return this.s.pop()

    }
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    if(this.s.length < k){
        for(let i = 0; i < this.s.length; i++){
            this.s[i] += val;
        }
    }else{
        for(let i = 0; i < k; i++){
            this.s[i] += val;
        }
    }
    return this.s;
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */