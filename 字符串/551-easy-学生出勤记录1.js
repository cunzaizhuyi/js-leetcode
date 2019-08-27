// 551 easy 学生出勤记录1
//
//
// 给定一个字符串来代表一个学生的出勤记录，这个记录仅包含以下三个字符：
//
// 'A' : Absent，缺勤
// 'L' : Late，迟到
// 'P' : Present，到场
// 如果一个学生的出勤记录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
// 你需要根据这个学生的出勤记录判断他是否会被奖赏。
//
// 示例 1:
// 输入: "PPALLP"
// 输出: True

// 示例 2:
// 输入: "PPALLL"
// 输出: False
//


/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let aCount = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'A') aCount++;
    }
    
    let hasGtThreeL = false; // 有没有连续3个及以上L
    for(let i = 2; i < s.length - 2; i++){
        if (s[i] === 'L'){
            let count = 1
            for(let j = i - 2; j <= i + 2; j++){
                if(j!==i && s[j] === 'L'){
                    count++;
                }
            }
            if(count >= 3) hasGtThreeL = true
        }
    }
    
    
    return (!hasGtThreeL && aCount <= 1) 
};

// console.log(checkRecord('PPALLP'))
console.log(checkRecord('PPALLL'))