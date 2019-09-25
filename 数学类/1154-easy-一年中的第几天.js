// 1154 easy 一年中的第几天

// 给你一个按 YYYY-MM-DD 格式表示日期的字符串 date，请你计算并返回该日期是当年的第几天。
// 通常情况下，我们认为 1 月 1 日是每年的第 1 天，1 月 2 日是每年的第 2 天，依此类推。
// 每个月的天数与现行公元纪年法（格里高利历）一致。


/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let dateArr = Array.of(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    let [year, month, day] = date.split('-').map(e=>parseInt(e));
    let res = day;
    for(let i=0;i<month-1; i++){
        res += dateArr[i];
    }
    if(month>2 && ((year % 4==0 && year % 100 !=0) || year % 400 ==0)){
        res += 1;
    }
    return res;
};

