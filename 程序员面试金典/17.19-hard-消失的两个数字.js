// 17.19 hard 

// 给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？
// 以任意顺序返回这两个数字均可。
//
// 示例 1:
// 输入: [1]
// 输出: [2,3]
// 示例 2:
// 输入: [2,3]
// 输出: [1,4]
// 提示：
// nums.length <= 30000


// 17.19
let missingTwo = (nums) => {
    let oL = nums.length + 2;
    let hash = {};
    for (let i = 1; i <= oL; i++){
        hash[nums[i - 1]] = true;
        if(hash[i] === true)continue;
        hash[i] = false;
    }
    let res = [];
    for(let k in hash){
        if(hash[k] === false){
            res.push(k / 1);
        }
    }
    return res;
}
console.log(missingTwo([1,3,4,5,6,7,9]));