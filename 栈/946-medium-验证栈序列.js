// 946 medium 验证栈序列

//给定 pushed 和 popped 两个序列，只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；
// 否则，返回 false 。
//
// 示例 1：
// 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// 输出：true
// 解释：我们可以按以下顺序执行：
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// 示例 2：
// 输入：pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// 输出：false
// 解释：1 不能在 2 之前弹出。
//  
// 提示：
// 0 <= pushed.length == popped.length <= 1000
// 0 <= pushed[i], popped[i] < 1000
// pushed 是 popped 的排列。

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    if(!pushed.length && !popped.length) return true;
    if(!pushed.length || !popped.length) return false;
    if(pushed.length !== popped.length) return false;
    let stack = []
    for(let i = 0; i < popped.length; i++){
        while(true){
            // 先放
            if(pushed.length){
                if(popped[i] !== pushed[0]){
                    if(stack.length && stack[stack.length-1] === popped[i]){
                        stack.pop();
                        break;
                    }else{
                        stack.push(pushed.shift());
                    }
                } else {
                    // 直接丢掉，不用先放栈再弹出
                    pushed.shift()
                    break;
                }

                // 已经放完了，只能取了
            }else{
                if(popped[i] === stack[stack.length - 1]){
                    stack.pop();
                    break;
                }else {
                    return false;
                }
            }
        }
    }
    // 如果是true，模拟的栈最后应该为空
    return !stack.length
};

console.log(validateStackSequences([1,2,3,4,5],
    [4,5,3,2,1]))