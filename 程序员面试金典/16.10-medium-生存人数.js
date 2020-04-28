//面试题 16.10. 生存人数

// 给定N个人的出生年份和死亡年份，第i个人的出生年份为birth[i]，死亡年份为death[i]，实现一个方法以计算生存人数最多的年份。
// 你可以假设所有人都出生于1900年至2000年（含1900和2000）之间。如果一个人在某一年的任意时期都处于生存状态，
// 那么他们应该被纳入那一年的统计中。例如，生于1908年、死于1909年的人应当被列入1908年和1909年的计数。
// 如果有多个年份生存人数相同且均为最大值，输出其中最小的年份。
//
// 示例：
// 输入：
// birth = {1900, 1901, 1950}
// death = {1948, 1951, 2000}
// 输出： 1901
// 提示：
// 0 < birth.length == death.length <= 10000
// birth[i] <= death[i]

var maxAliveYear = function(birth, death) {
    // 计数排序的思想
    let arr = []; // 存1900-2000一共101年的存活人数
    // 统计每一年的人数
    for(let i = 0; i < birth.length; i++){
        let range = [birth[i], death[i]];
        for(let j = range[0]; j <= range[1]; j++){
            arr[j - 1900] = ~~arr[j - 1900] + 1;
        }
    }
    // 找到最大值。倒着找，保证有多个最大存活人数的年份，返回最小年份。
    let max = arr.length - 1
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= arr[max] ){
            max = i;
        }
    }
    return max + 1900;
};