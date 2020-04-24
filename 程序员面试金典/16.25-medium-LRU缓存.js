// 16.25 medium LRU缓存


// 设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。
// 缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。
// 当缓存被填满时，它应该删除最近最少使用的项目。
//
// 它应该支持以下操作： 获取数据 get 和 写入数据 put 。
//
// 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
// 写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。
// 当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
//
// 示例:
//
// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );
//
// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4
//


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.hash = {}; // 仅仅用来存k/v值
    this.mark = []; // 标记活跃度。不活跃的在前面，活跃的在后面
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.hash[key]){
        this.updateMark(key);
        return this.hash[key]
    }else{
        return -1;
    }
};

// 更新 活跃度
LRUCache.prototype.updateMark = function(key){
    let index = this.mark.indexOf(key);
    if (index !== -1){
        this.mark.splice(index, 1);
    }
    this.mark.push(key); // 最活跃的放最后
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // 已经存在，更新值。
    if (this.hash[key]){
        this.hash[key] = value;
        this.updateMark(key);
        return;
    }
    // 不存在的情况下. 根据目前的容量剩余决定是否需要删除不常用的
    if (Object.keys(this.hash).length < this.capacity){
        this.updateMark(key);
        this.hash[key] = value;

    } else { // 需要删除不常用的
        delete this.hash[this.mark[0]];
        this.mark.shift();
        this.hash[key] = value;
        this.mark.push(key);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */