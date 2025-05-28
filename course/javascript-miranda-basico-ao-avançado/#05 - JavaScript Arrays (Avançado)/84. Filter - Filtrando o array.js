// Function de uma array para controlar valores, muito usados para verificar, como se 
// a idade é maior de idade ou se os arquivos que estamos mexendo é de javascript (.js) 

// Filter sempre retorna outro array

const arr1 = [10,15, 17, 19, 20,30,40,50]

// Utilizando functions normais
const valores = arr1.filter(checkIfIsAdult)

function checkIfIsAdult(value) {
    return value>18
}

console.log(valores)

// Utilizando arrows functions

const valoresArrow = arr1.filter(arr1 => arr1 >= 18) // O nome do parâmetro deve ser o mesmo que você vai usar na condição.

console.log(valoresArrow)

// Desafio

const pessoas = [
    {
        nome: 'silvaleal',
        idade: 19
    },
    {
        nome: 'silva',
        idade: 15
    },
    {
        nome: 'leal',
        idade: 18
    },
    {
        nome: 'lleeaall',
        idade: 21
    }
]

const pessoasComNomeGrande = pessoas.filter(pessoas => pessoas.nome.length >= 5)
const pessoasAdultas = pessoas.filter(pessoas => pessoas.idade >= 18)
console.log(pessoasComNomeGrande)
console.log(pessoasAdultas)