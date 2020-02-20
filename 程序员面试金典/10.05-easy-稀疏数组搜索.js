// 面试题 10.05. 稀疏数组搜索 easy

// 稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。
//
// 示例1:
//
//  输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
//  输出：-1
//  说明: 不存在返回-1。

// 示例2:
//  输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
//  输出：4

// 提示:
// words的长度在[1, 1000000]之间

var findString = function(words, s) {
    // 因为是排好序的字符串，按理应该用二分
    let hash = {};
    for(let i = 0; i < words.length; i++){
        hash[words[i]] = i;
    }
    return hash[s] >= 0 ? hash[s]: -1;
};