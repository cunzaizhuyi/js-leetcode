// 面试题 17.14. 最小K个数

//设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
//
// 示例：
// 输入： arr = [1,3,5,7,2,4,6,8], k = 4
// 输出： [1,2,3,4]
// 提示：
// 0 <= len(arr) <= 100000
// 0 <= k <= min(100000, len(arr))

var insertSort = (arr, k) => {
    if (k < arr[0]) {
        arr.unshift(k);
        return arr;
    }
    for(let i = 0; i <= arr.length - 2; i++){
        if (k >= arr[i] && k < arr[i+1]){
            // 由于数组空间连续，插入一个数，只能挨个覆盖，或者分配更多空间，搞个新数组。
            // 这里使用的是浪费空间的方式
            let l = arr.slice(0, i + 1);
            l.push(k);
            let r = arr.slice(i + 1);
            arr = l.concat(r);
            break;
        }
    }
    if (k >= arr[arr.length - 1]){
        arr.push(k);
    }
    return arr;
}
var smallestK = function(arr, k) {
    if (!arr.length || k === 0) return [];
    let minArr = arr.slice(0, k);
    minArr.sort((a, b) => {
        return a - b;
    });
    for(let i = k; i < arr.length; i++){
        // 需要排序
        if (arr[i] < minArr[minArr.length - 1]){
            // 新进来一个小的数，就要删除一个最大的数
            minArr.pop();
            // 将这个较小数，插入合适位置
            minArr = insertSort(minArr, arr[i]);
        }
    }
    return minArr;
};