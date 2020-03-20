// 846 medium 一手顺子

// 爱丽丝有一手（hand）由整数数组给定的牌。 
// 现在她想把牌重新排列成组，使得每个组的大小都是 W，且由 W 张连续的牌组成。
// 如果她可以完成分组就返回 true，否则返回 false。
//  
//
// 示例 1：
// 输入：hand = [1,2,3,6,2,3,4,7,8], W = 3
// 输出：true
// 解释：爱丽丝的手牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
// 示例 2：
// 输入：hand = [1,2,3,4,5], W = 4
// 输出：false
// 解释：爱丽丝的手牌无法被重新排列成几个大小为 4 的组。
//  
//
// 提示：
// 1 <= hand.length <= 10000
// 0 <= hand[i] <= 10^9
// 1 <= W <= hand.length


let isNStraightHand = (hand, W) => {
    if (hand.length % W !== 0) return false;
    // 能划分成几个
    let cnt = hand.length / W;
    let hash = {}
    for (let i = 0; i < hand.length; i++){
        hash[hand[i]] = ~~hash[hand[i]] + 1;
    }
    for (let i = 1; i <= cnt; i++){
        let min = Math.min(...Object.keys(hash));
        for (let i = 0; i <= W - 1; i++){
            if (hash[min + i] >= 1){
                hash[min + i]--; // 相当于数组删除数据
                // 为了保证取min那一步取到的是"剩余的数据"里面的最小值
                if (hash[min + i] === 0){
                    delete hash[min + i];
                }
            }else{
                return false;
            }
        }
    }
    return true;
}
console.log(isNStraightHand([1,2,3,6,2,3,4,7,8], 3))