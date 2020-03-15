// 设计一个支持增量操作的栈 5357 medium




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