// 5178 medium 四因数

// 给你一个整数数组 nums，请你返回该数组中恰有四个因数的这些整数的各因数之和。
// 如果数组中不存在满足题意的整数，则返回 0 。
//
//
// 示例：
// 输入：nums = [21,4,7]
// 输出：32
// 解释：
// 21 有 4 个因数：1, 3, 7, 21
// 4 有 3 个因数：1, 2, 4
// 7 有 2 个因数：1, 7
// 答案仅为 21 的所有因数的和。
//
// 提示：
// 1 <= nums.length <= 10^4
// 1 <= nums[i] <= 10^5


// 某个数的 因数个数 （若为4个）的和，否则0
let yinshusum = (n) => {
    let set = new Set();
    set.add(1);
    set.add(n);
    for(let i = 2; i <= ~~Math.sqrt(n) + 1; i++){
        if (n % i === 0){
            set.add(i);
            set.add(n / i);
        }
    }
    if (set.size === 4){
        return Array.from(set).reduce((a, b) => {
            return a + b;
        }, 0)
    }
    return 0;
};

var sumFourDivisors = function(nums) {
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += yinshusum(nums[i]);
    }
    return sum;
};

// console.log(yinshusum(21))
console.log(sumFourDivisors([21,4,7]))