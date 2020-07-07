
//16.15. 珠玑妙算 easy

// 珠玑妙算游戏（the game of master mind）的玩法如下。
// 计算机有4个槽，每个槽放一个球，颜色可能是红色（R）、黄色（Y）、绿色（G）或蓝色（B）。
// 例如，计算机可能有RGGB 4种（槽1为红色，槽2、3为绿色，槽4为蓝色）。作为用户，你试图猜出颜色组合。
// 打个比方，你可能会猜YRGB。要是猜对某个槽的颜色，则算一次“猜中”；要是只猜对颜色但槽位猜错了，则算一次“伪猜中”。
// 注意，“猜中”不能算入“伪猜中”。

// 给定一种颜色组合solution和一个猜测guess，编写一个方法，返回猜中和伪猜中的次数answer，
// 其中answer[0]为猜中的次数，answer[1]为伪猜中的次数。
//
// 示例：
// 输入： solution="RGBY",guess="GGRR"
// 输出： [1,1]
// 解释： 猜中1次，伪猜中1次。
// 提示：
// len(solution) = len(guess) = 4
// solution和guess仅包含"R","G","B","Y"这4种字符

/**
 * @param {string} solution
 * @param {string} guess
 * @return {number[]}
 */
var masterMind = function(solution, guess) {
    solution = solution.split('')
    guess = guess.split('')

    // 对应位置字符相同的有几个
    let win = 0
    for(let i = 0; i < solution.length; i++){
        if(solution[i] === guess[i]){
            win++;
            solution.splice(i, 1)
            guess.splice(i, 1)
            i--;
        }
    }

    // 哈希部分
    let fakeWin = 0;
    let h = {}
    let hh = {}
    for(let i = 0; i < solution.length; i++){
        h[solution[i]] = ~~h[solution[i]] + 1;
    }
    for(let j = 0; j < guess.length; j++){
        hh[guess[j]] = ~~hh[guess[j]] + 1;
    }
    for(let k in hh){
        if(h[k]){
            if (h[k] >= hh[k]){
                fakeWin += hh[k]
            }else{
                fakeWin += h[k]
            }
        }
    }
    return [win, fakeWin]
};