// 278. 第一个错误的版本 easy

// 你是产品经理，目前正在带领一个团队开发新的产品。不幸的是，你的产品的最新版本没有通过质量检测。
// 由于每个版本都是基于之前的版本开发的，所以错误的版本之后的所有版本都是错的。
// 假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。
// 你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。
// 实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。
//
// 示例:
// 给定 n = 5，并且 version = 4 是第一个错误的版本。
// 调用 isBadVersion(3) -> false
// 调用 isBadVersion(5) -> true
// 调用 isBadVersion(4) -> true
// 所以，4 是第一个错误的版本。 


/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n===1)return isBadVersion(1) ? 1: 0;
        if(n===2)return isBadVersion(2) ? (isBadVersion(1)?1:2): 0
        let mid = ~~((1+n) / 2);
        let l=1, r=n;
        while(l <= r){
            let res = isBadVersion(mid);
            let res2 = isBadVersion(mid - 1)
            if(res === true && res2 === false){
                return mid;
            }else if(res === true && res2 === true){
                //    往左找
                r = mid - 1;
            }else if(res === false && res2 === false){
                l = mid + 1;
            }
            mid = ~~((l+r)/2)
        }
    };
};