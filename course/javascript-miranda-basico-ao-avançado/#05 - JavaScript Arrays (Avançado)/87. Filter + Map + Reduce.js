
// Pegar apenas os pares
// Dobrar os valores
// Somar tudo
const arr1 = [10,15, 17, 19, 20, 23, 30, 38, 40,50]


const apenasPares = arr1
    .filter(value => value % 2 === 0)
    .map(value => value*2)
    .reduce((acum, value) => acum+=value)
// const dobrando = apenasPares.map(value => value*2)
// const somandoNumbers = dobrando.reduce((acum, value) => acum+=value)