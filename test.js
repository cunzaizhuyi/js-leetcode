/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.arr = []
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
 this.arr.push(word)
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let regStr = '^'
    for(let i = 0; i < word.length; i++){
        if(word[i] !== '.'){
            regStr += word[i]
        }else{
            regStr += '[a-z]'
        }
    }
    regStr += '$'
    let reg = new RegExp(regStr)
    for(let i = 0; i < this.arr.length; i++){
        if(reg.test(this.arr[i])){
            return true
        }
    }
    return false
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */