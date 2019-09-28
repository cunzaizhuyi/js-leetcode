// 380 medium 常数时间插入、删除和获取随机元素

// 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。
//
// insert(val)：当元素 val 不存在时，向集合中插入该项。
// remove(val)：元素 val 存在时，从集合中移除该项。
// getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。


/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.hash = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.hash[val]){
        return false
    }else{
        this.hash[val] = true;
        return true;
    }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.hash[val] >= 0){
        delete this.hash[val]
        return true;
    }else return false
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    if(!Object.values(this.hash).length) return false;
    let len = Object.values(this.hash).length;
    let r = ~~(Math.random() * len)
    return Object.keys(this.hash)[r]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
