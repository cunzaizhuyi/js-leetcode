

/**
 * ❌解法
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function(hours) {
    let isFouArr = []
    for(let i = 0; i < hours.length; i++){
        if (hours[i] > 8) isFouArr.push(true)
        else isFouArr.push(false)
    }
    
    let maxLen = 0;
    for(let i = 0; i < isFouArr.length; i++){
        let isCount = isFouArr[i] ? 1 : 0; // 良好工作天数
        let falseCount = isFouArr[i] ? 0 : 1; // 不良好工作天数
        for(let j = i + 1; j < isFouArr.length; j++){
            if (isFouArr[j]) {
                isCount++;
                // 比较一下，看是否需要更新，然后i下一轮循环
                if (maxLen < isCount + falseCount - 1){
                    maxLen = isCount + falseCount - 1;
                }
            } else {
                falseCount++;
                if (isCount <= falseCount){
                    break;
                }
            }
        }
    }
    return maxLen
};

console.log(longestWPI([6,6,6]))