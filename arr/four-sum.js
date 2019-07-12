// 用法proxy reflect
let obj = {
    name: "zhangsan",
    age: "15"
}
let p = new Proxy(obj, {
    get(obj, key){
        console.log(`你要获取${key}的值`)
        return Reflect.get(obj, key)
    },
    set(obj, key, v){
        console.log(`你要设置${key}的值`)
        return Reflect.set(obj, key, v)
    }
})
console.log(p.name);
p.age = 19
console.log(p.age)

let arr = [1, 8, 9, 10, 13, 6]
let target = 7
function twoSum(arr, target){

}