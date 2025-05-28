// Concatenar significa juntar duas ou mais arrays.

const arr1 = ['Joao', 'Maria']
const arr2 = ['javascript', 'php']
const arr3 = ['crazy', 'hello']

const result = arr1.concat(arr2, arr3)

console.log(result) // [ 'Joao', 'Maria', 'javascript', 'php', 'crazy', 'hello' ]

// spread
// Mesmo resultado que o const

const resultSpread = [...arr1, ...arr2, ...arr3] // [ 'Joao', 'Maria', 'javascript', 'php', 'crazy', 'hello' ]

console.log(resultSpread)