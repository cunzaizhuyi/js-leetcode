// 448 easy 找到所有数组中消失的数字

// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
//
// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
//
// 示例:
// 输入:
//     [4,3,2,7,8,2,3,1]
//
// 输出:
//     [5,6]


/**
 * 解法1：利用js数组本身就有的includes或者indexf方法
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    let arr = []
    for(let i = 1; i <= n; i++){
        if (!nums.includes(i)) arr.push(i)
    }
    return arr;
};



/**
 * 解法2：建一个从1到N的对照表，遍历原数组，每遍历一个，删掉对照表中对应的值，最后对照表剩哪些，就是哪些没出现。
 * 这样可以把时间复杂度控制到O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers2 = function(nums) {
    let n = nums.length;
    let arr = [0]
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }

    // 把对上的全换成0，没对上的自然就保持不动
    for(let i = 0; i < nums.length; i++){
        if (arr[nums[i]] === nums[i]){
            arr.splice(nums[i], 1, 0)
        }
    }

    // 去掉所有的0
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === 0){
            arr.splice(i, 1)
        }
    }
    return arr;
};

console.log(findDisappearedNumbers2([4,3,2,7,8,2,3,1]))