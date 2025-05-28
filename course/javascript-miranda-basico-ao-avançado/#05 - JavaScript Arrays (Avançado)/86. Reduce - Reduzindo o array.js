// Pode ser usado para somar todos os números de uma array

const arr1 = [10,15, 17, 19, 20,30,40,50]

const sum = arr1.reduce(function (acumulador, value) {
    acumulador += value
    return acumulador
}, 0)

const sum2 = arr1.reduce((acumulador, value) => acumulador+=value, 0)


// Calculando pares
const sum3 = arr1.reduce((acumulador, value) => {
    if (value % 2 === 0) acumulador.push(value)
    return acumulador
}, [])

// Não recomendado, para pegar apenas os valores pares, devemos usar apenas o filter sem o reduce
const sum4 = arr1.reduce((acumulador, value) => {
    acumulador = arr1.filter(value => value % 2 === 1)
    return acumulador
}, [])

// console.log(sum3)


// Pegando o objeto da pessoa mais velha]
const pessoas = [
    {nome:'silva', idade: 19},
    {nome:'leal', idade: 20},
    {nome:'jose', idade: 33},
    {nome:'treloso', idade: 144},
]

const maisVelha = pessoas.reduce(function(acumulador, value) {
    if (acumulador.idade > value.idade) return acumulador
    return value
}, pessoas[0])

console.log(maisVelha)