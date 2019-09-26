// 1005 easy K 次取反后最大化的数组和

// 给定一个整数数组 A，我们只能用以下方法修改该数组：我们选择某个个索引 i 并将 A[i] 替换为 -A[i]，
// 然后总共重复这个过程 K 次。（我们可以多次选择同一个索引 i。）
// 以这种方式修改数组后，返回数组可能的最大和。
//
// 示例 1：
// 输入：A = [4,2,3], K = 1
// 输出：5
// 解释：选择索引 (1,) ，然后 A 变为 [4,-2,3]。
// 示例 2：
// 输入：A = [3,-1,0,2], K = 3
// 输出：6
// 解释：选择索引 (1, 2, 2) ，然后 A 变为 [3,1,0,2]。
// 示例 3：
//
// 输入：A = [2,-3,-1,5,-4], K = 2
// 输出：13
// 解释：选择索引 (1, 4) ，然后 A 变为 [2,3,-1,5,4]。
//  
//
// 提示：
// 1 <= A.length <= 10000
// 1 <= K <= 10000
// -100 <= A[i] <= 100


/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {
    // 没有负数的情况
    let min = A[0]
    for(let i = 1; i < A.length; i++){
        if(A[i] < min){
            min = A[i]
        }
    }
    if(min > 0){
        K = K % 2;
        if(K===1) A[A.indexOf(min)] = -A[A.indexOf(min)]
        return A.reduce((p,n) => {
            return p+n
        }, 0)
    }else if(min === 0){ // 如果最小值是0，始终反转0这一项，即返回数组原和
        return A.reduce((p,n) => {
            return p+n
        }, 0)
    }


    // 有负数的情况
//    找到所有负数，按递增排序
    let arr = []
    for(let i = 0; i < A.length; i++){
        if(A[i]<0){
            arr.push(A[i])
        }
    }
    arr.sort((a, b) => {
        return a-b
    })
    if(K > arr.length){
        for(let i = 0; i < A.length; i++){
            if(A[i] < 0) A[i] = - A[i]
        }
        // 没有负数的情况
        let min = A[0]
        for(let i = 1; i < A.length; i++){
            if(A[i] < min){
                min = A[i]
            }
        }
        if(min > 0){
            K = (K-arr.length) % 2;
            if(K===1) A[A.indexOf(min)] = -A[A.indexOf(min)]
            return A.reduce((p,n) => {
                return p+n
            }, 0)
        }else if(min === 0){ // 如果最小值是0，始终反转0这一项，即返回数组原和
            return A.reduce((p,n) => {
                return p+n
            }, 0)
        }

    }else{
        // k还没有负数多，从最小的负数反转
        let index = 0
        while(index < K){
            arr[index] = -arr[index]
            index++;
        }


        //所有的正数，对他们求和
        let sum1 = 0
        for(let i = 0; i < A.length; i++){
            if(A[i]>0){
                sum1 += A[i]
            }
        }

        let sum2 = 0
        for(let i = 0; i < arr.length; i++){
            sum2 += arr[i]
        }
        return sum1 + sum2;
    }
};

// console.log(largestSumAfterKNegations([4,2,3], 1))
// console.log(largestSumAfterKNegations([3,-1,0,2], 3))
// console.log(largestSumAfterKNegations([2,-3,-1,5,-4], 2))
// console.log(largestSumAfterKNegations([-4,-6,9,-2,2], 4))
// console.log(largestSumAfterKNegations([5,-7,-8,-3,9,5,-5,-7],7))
console.log(largestSumAfterKNegations([8,-7,-3,-9,1,9,-6,-9,3],8))