// Usada para retornar a mesma array, porém com modificações, como dobrar valores.

const arr1 = [10,15, 17, 19, 20,30,40,50]

const mapped = arr1.map(value => `Silva tem ${value} anos`)
const double = arr1.map(value => value*2)

console.log(mapped)
console.log(double)