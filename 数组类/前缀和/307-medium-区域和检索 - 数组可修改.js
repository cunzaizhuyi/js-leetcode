//307. 区域和检索 - 数组可修改

// 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
// update(i, val) 函数可以通过将下标为 i 的数值更新为 val，从而对数列进行修改。
//
// 示例:
// Given nums = [1, 3, 5]
// sumRange(0, 2) -> 9
// update(1, 2)
// sumRange(0, 2) -> 8
// 说明:
// 数组仅可以在 update 函数下进行修改。
// 你可以假设 update 函数与 sumRange 函数的调用次数是均匀分布的。

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.arr = nums;
    // 拿到前缀和数组
    this.preSum = []
    let sum = 0
    if(nums.length){
        for(let i = 0; i < nums.length; i++){
            sum += nums[i];
            this.preSum.push(sum);
        }
    }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.arr.splice(i, 1, val);
    // 拿到前缀和数组
    this.preSum = []
    let sum = 0
    if(this.arr.length){
        for(let i = 0; i < this.arr.length; i++){
            sum += this.arr[i];
            this.preSum.push(sum);
        }
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.preSum[j] - ~~this.preSum[i-1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */