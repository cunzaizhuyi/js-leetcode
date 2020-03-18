// 61 easy 扑克牌中的顺子

// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
// 2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
//  
//
// 示例 1:
// 输入: [1,2,3,4,5]
// 输出: True
//  
//
// 示例 2:
// 输入: [0,0,1,2,5]
// 输出: True
//
// 限制：
// 数组长度为 5 
// 数组的数取值为 [0, 13] .


let isStraight = (nums) => {
    nums.sort((a, b) => {
        return a - b;
    })
    let zeroN = nums.lastIndexOf(0) + 1;
    let restArr = nums.slice(nums.lastIndexOf(0) + 1);
    let c = 0
    for (let i = 0; i < restArr.length - 1; i++){
        if (restArr[i+1] - restArr[i] > 1){
            c += restArr[i+1] - restArr[i] - 1
        }else if(restArr[i+1] === restArr[i]){ // 只要有相等的元素，肯定不是顺子
            return false;
        }
    }
    return c <= zeroN;
}
console.log(isStraight([1,2,3,4,5]));