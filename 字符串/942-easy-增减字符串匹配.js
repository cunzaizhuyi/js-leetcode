// 942 easy 增减字符串匹配

// 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。
// 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：
// 如果 S[i] == "I"，那么 A[i] < A[i+1]
// 如果 S[i] == "D"，那么 A[i] > A[i+1]
//
// 示例 1：
// 输出："IDID"
// 输出：[0,4,1,3,2]

// 示例 2：
// 输出："III"
// 输出：[0,1,2,3]

// 示例 3：
// 输出："DDI"
// 输出：[3,2,0,1]
//
// 提示：
// 1 <= S.length <= 1000
// S 只包含字符 "I" 或 "D"。


// 思路：
// 1.生成一个数组arr，用于放置结果数据。arr正序排好。
// 2. 遍历S中的字符：
// 如果是I，就从arr的前面取一个数，放到结果数组ans里。
// 如果是D，就从arr的后面去一个数，放到结果数组ans里。


/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let arr = []
    for(let i = 0; i <= S.length; i++){
        arr.push(i);
    }
    let ans = []
    for(let i = 0; i < S.length; i++){
        if(S[i] === 'I'){
            ans.push(arr.shift())
        }else{
            ans.push(arr.pop())
        }
    }
    ans.push(arr[0])
    return ans;
};

console.log(diStringMatch("IDID"))