// 575 easy 分糖果

// 给定一个偶数长度的数组，其中不同的数字代表着不同种类的糖果，每一个数字代表一个糖果。你需要把这些糖果平均分给一个弟弟和一个妹妹。返回妹妹可以获得的最大糖果的种类数。
//
// 示例 1:
// 输入: candies = [1,1,2,2,3,3]
// 输出: 3
// 解析: 一共有三种种类的糖果，每一种都有两个。
//      最优分配方案：妹妹获得[1,2,3],弟弟也获得[1,2,3]。这样使妹妹获得糖果的种类数最多。

// 示例 2 :
// 输入: candies = [1,1,2,3]
// 输出: 2
// 解析: 妹妹获得糖果[2,3],弟弟获得糖果[1,1]，妹妹有两种不同的糖果，弟弟只有一种。这样使得妹妹可以获得的糖果种类数最多。

// 注意:
// 数组的长度为[2, 10,000]，并且确定为偶数。
// 数组中数字的大小在范围[-100,000, 100,000]内。

/**
 * 如果糖果种类数>= total/2，妹妹获得total/2种糖果。如果 种类数<total/2，妹妹获取 =种类数 的糖果
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let kind = 0
    let hash = {}
    for(let i = 0; i < candies.length; i++){
        if(!hash[candies[i]]){
            hash[candies[i]] = 1
            kind++;
        }
    }
    if (kind >= candies.length / 2) return candies.length / 2
    else {
        return kind
    }
};



/**
 * 思路如上，但求种类的方法，直接用去重做. 执行结果比第一种方案好
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies2 = function(candies) {
    let kind = Array.from(new Set(candies)).length

    if (kind >= candies.length / 2) return candies.length / 2
    else {
        return kind
    }
};


console.log(distributeCandies2([1,1,2,3]))