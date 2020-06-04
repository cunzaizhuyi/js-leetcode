

let getC = (a, b) => {
    return (a + b) % 100
}

let getA = (b, c) => {
    return c > b ? c - b: c + 100 -b;
}


let l1 = [1,2,'?'];
let l2 = [99,99, '?']
let l3 = [5,99, '?']
let l4 = ['?',2, 3]
let l5 = ['?',99, 98]
let l6 = ['?',99, 5]

console.log(getC(1,2))
console.log(getC(99,99))
console.log(getC(5,99))
console.log(getA(2,3))
console.log(getA(99,98))
console.log(getA(99,5))