// 997. 找到小镇的法官 easy

// 在一个小镇里，按从 1 到 N 标记了 N 个人。传言称，这些人中有一个是小镇上的秘密法官。
// 如果小镇的法官真的存在，那么：
// 小镇的法官不相信任何人。
// 每个人（除了小镇法官外）都信任小镇的法官。
// 只有一个人同时满足属性 1 和属性 2 。
// 给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示标记为 a 的人信任标记为 b 的人。
// 如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的标记。否则，返回 -1。
//
// 示例 1：
// 输入：N = 2, trust = [[1,2]]
// 输出：2
// 示例 2：
// 输入：N = 3, trust = [[1,3],[2,3]]
// 输出：3
// 示例 3：
// 输入：N = 3, trust = [[1,3],[2,3],[3,1]]
// 输出：-1
// 示例 4：
// 输入：N = 3, trust = [[1,2],[2,3]]
// 输出：-1
// 示例 5：
// 输入：N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
// 输出：3
//
// 提示：
// 1 <= N <= 1000
// trust.length <= 10000
// trust[i] 是完全不同的
// trust[i][0] != trust[i][1]
// 1 <= trust[i][0], trust[i][1] <= N



/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    let len = trust.length;
    // 至少得有N-1个信任对
    if(len < N - 1){
        return -1;
    }
//   遍历所有信任别人的人的集合，跟1-N比对，缺席的人，就是谁都不信的人，是潜在的法官。
    let arr = []
    for(let i = 1; i <= N; i++){
        arr.push(i)
    }
    for(let i = 0; i < trust.length; i++){
        if (arr.indexOf(trust[i][0]) > -1) {
            arr.splice(arr.indexOf(trust[i][0]), 1);
        }
    }
    if(arr.length > 1)return -1;// 只能剩一个人
//    遍历被信任的人，如果arr中那个潜在的法官被信任的次数等于N-1,它就是
    let count = 0
    for(let i = 0; i < trust.length; i++){
        if(trust[i][1] === arr[0])count++
    }
    return count === N-1 ? arr[0]: -1
};

// console.log(findJudge(3,[[1,3],[2,3],[3,1]]));
console.log(findJudge(3,[[1,3],[2,3]]));
console.log(findJudge(4,[[1,3],[1,4],[2,3],[2,4],[4,3]]));