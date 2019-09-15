// 208 medium 实现Trie

// 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
//
// 示例:
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // 返回 true
// trie.search("app");     // 返回 false
// trie.startsWith("app"); // 返回 true
// trie.insert("app");
// trie.search("app");     // 返回 true

// 说明:
// 你可以假设所有的输入都是由小写字母 a-z 构成的。
// 保证所有输入均为非空字符串。


class TreeNode{
    constructor(val) {
        this.val = val
        this.isWord = false;
        this.chilrden = {}
    }

}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = new TreeNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curNode = this.root;
    let arr = word.split('')
    for(let i = 0; i < arr.length; i++){
        let isHasChildNode = curNode.chilrden[arr[i]]
        if(!isHasChildNode){
            curNode.chilrden[arr[i]] = new TreeNode(arr[i])
        }
        curNode = curNode.chilrden[arr[i]]
        if(i === arr.length - 1){
            curNode.isWord = true;
        }
    }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curNode = this.root;
    let arr = word.split('')
    for(let i = 0; i < arr.length; i++){
        if(!curNode.chilrden[arr[i]]){
            return false;
        }
        curNode = curNode.chilrden[arr[i]]
        if(i === arr.length - 1){
            return curNode.isWord === true
        }
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curNode = this.root;
    let arr = prefix.split('')
    for(let i = 0; i < arr.length; i++){
        if(!curNode.chilrden[arr[i]]){
            return false;
        }
        curNode = curNode.chilrden[arr[i]]
    }
    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"));  // 返回 true
console.log(trie.search("app"));     // 返回 false
console.log(trie.startsWith("app")); // 返回 true
trie.insert("app");
console.log(trie.search("app"));     // 返回 true
