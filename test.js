


// 937
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    if (!logs.length) return [];
    // 拿到数字日志
    let digitLog = []
    for(let i = logs.length - 1; i >= 0; i--){
        if (/^[a-z0-9]\s\d+$/.test(logs[i])){
            digitLog.push(logs[i])
            logs.splice(i, 1)
        }
    }
    // 排序字母日志
    logs.sort((a, b) => {
        let aLast = a.substring(a.indexOf(' '))
        let aF = a.substring(0, a.indexOf(' '))
        let bLast = b.substring(b.indexOf(' '))
        let bF = b.substring(0, b.indexOf(' '))
        if (aLast !== bLast){
            if (aLast > bLast){
                return 1
            }else{
                return -1
            }
        } else{
            if (aF > bF){
                return 1
            }else {
                return -1;
            }
        }
    });
    
    return logs.concat(digitLog);
};



