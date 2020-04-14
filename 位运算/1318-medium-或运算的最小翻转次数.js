
// 或运算的最小翻转次数 1318 medium

// 给你三个正整数 a、b 和 c。
// 你可以对 a 和 b 的二进制表示进行位翻转操作，返回能够使按位或运算   a OR b == c  成立的最小翻转次数。
// 「位翻转操作」是指将一个数的二进制表示任何单个位上的 1 变成 0 或者 0 变成 1 。
//  
//
// 示例 1：
// 输入：a = 2, b = 6, c = 5
// 输出：3
// 解释：翻转后 a = 1 , b = 4 , c = 5 使得 a OR b == c
// 示例 2：
// 输入：a = 4, b = 2, c = 7
// 输出：1
// 示例 3：
// 输入：a = 1, b = 2, c = 3
// 输出：0
//  
//
// 提示：
// 1 <= a <= 10^9
// 1 <= b <= 10^9
// 1 <= c <= 10^9


var is1 = (n, k) => {
    return !!(n & (1  << (k - 1)));
};

var minFlips = function(a, b, c) {
    let or = a | b;
    let len = Math.max(a, b, c).toString(2).length;

    let cnt = 0;
    for(let i = 1; i <= len; i++){
        // 在c的某位置，跟or结果不一样的情况下。可能需要反转1次或者两次
        if (is1(c, i) !== is1(or, i)){
            if (!is1(c, i) && is1(a, i) && is1(b, i)){
                cnt += 2;
            } else {
                cnt += 1;
            }
        }
    }
    return cnt;
};

// console.log(minFlips(5, 2, 8))
