

// 并查集类。需要维护一个数组和两个方法，find()和union()
class bingchaSet{
    constructor(n) {
        this.arr = []
        // 初始默认为每个人是独立圈子，则他的父级就是他自身
        for(let i = 0; i < n; i++){
            this.arr[i] = i;
        }
    }

    // 直到arr[x]==x，停止向上搜索
    find(x){
        let arr = this.arr;
        while(arr[x] !== x){
            x = arr[x];
        }
        return arr[x]
    }

    // 路径压缩
    union(x, y){
        let xFather = this.find(x)
        let yFather = this.find(y)
        let bool = xFather === yFather;
        if(xFather!==yFather){
            this.arr[xFather] = yFather;
        }
        return bool;
    }
}

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {

    let set = new bingchaSet(edges.length)
    for(let i = 0; i < edges.length; i++){
        let left = edges[i][0]
        let right = edges[i][1]
        if(set.union(left, right)){
            return edges[i];
        }
    }
};

console.log(findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]))