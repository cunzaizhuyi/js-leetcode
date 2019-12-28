// 90 medium 子集2

//给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
//
// 说明：解集不能包含重复的子集。
//
// 示例:
//
// 输入: [1,2,2]
// 输出:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]
//



var subsetsWithDup = (nums) => {
    if(!nums.length) return [];
    nums.sort((a, b) => {
        return a - b;
    })
    let ans = [[], [nums[0]]];
    let hash = {[nums[0]]: true}
    for (let i = 1; i < nums.length; i++){
        let arr = []
        for (let j = 0; j < ans.length; j++){
            let tmpArr = [...ans[j]];
            tmpArr.push(nums[i])
            if(hash[tmpArr.join('')])continue; // 去重
            arr.push(tmpArr);
            hash[tmpArr.join('')] = true;
        }
        ans = ans.concat(arr);
    }
    return ans;
}
console.log(subsetsWithDup([1,2,2]))