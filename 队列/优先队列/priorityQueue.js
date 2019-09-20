// 优先队列数据结构

class queueElement{
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}


class priorityQueue{
    constructor(){
        this.queue = []
    }
    // 入队，根据优先级高低插入适当的位置；跟val没关系，只比较priority
    enqueue(val, priority){
        let node = new queueElement(val, priority);
        let queue = this.queue;
        /* 三种特殊情况 */
        if (!queue.length) return queue.push(node);
        if (priority >= queue[queue.length - 1].priority) return queue.push(node);
        else if(priority < queue[0].priority) return queue.unshift(node);
        // 确定插入位置
        let mid = ~~(queue.length / 2);
        let left = 0, right = queue.length - 1;
        while(left <= right){
            if (priority >= queue[mid].priority && priority < queue[mid + 1].priority){
                // 在mid + 1处插入
                for (let i = queue.length; i >= mid + 2; i--){
                    queue[i] = queue[i - 1]
                }
                queue.splice(mid + 1, 1, node);
                return;
            }else if (priority >= queue[mid + 1]){
                left = mid + 1;
            }else if(priority < queue[mid]){
                right = mid;
            }
            mid = ~~((left + right) / 2)
        }
    }
    peek(){
        return this.queue[0] ? this.queue[0]: null;
    }
    shift(){
        return this.queue.shift();
    }
}

let q = new priorityQueue()
q.enqueue(1, 1)
q.enqueue(2, 2)
q.enqueue(3, 3)
q.enqueue(4, 2)
q.enqueue(5, 4)
console.log(q.queue, 'ff')