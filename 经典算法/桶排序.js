// 有个局限，就是必须知道最大的数，你才知道要声明多少个桶！

let arr = [4,9,8, 5, 2,6, 10, 8, 4]

function tongSort(arr){
  let tong = []
  for(let i = 0; i <= 10; i++){ // 最大的数不能超过10
    tong.push(0)
  }
  arr.forEach((v)=>{
    tong[v]++
  })
  // 输出部分
  let resultArr = []
  tong.forEach((count, value)=>{
    if(count !== 0){
      for(let i=1; i <= count; i++){
        resultArr.push(value)
      }
    }
  })
  return resultArr
}
console.log(tongSort(arr))