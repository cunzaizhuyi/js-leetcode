// 677 medium 键值映射

// 实现一个 MapSum 类里的两个方法，insert 和 sum。
// 对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。
// 如果键已经存在，那么原来的键值对将被替代成新的键值对。
// 对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和。
//
// 示例 1:
// 输入: insert("apple", 3), 输出: Null
// 输入: sum("ap"), 输出: 3
// 输入: insert("app", 2), 输出: Null
// 输入: sum("ap"), 输出: 5


/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.hash = {}
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.hash[key] = val
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    let sum = 0;
    for(let key in this.hash){
        if(key.startsWith(prefix)){
            sum += this.hash[key]
        }
    }
    return sum;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */