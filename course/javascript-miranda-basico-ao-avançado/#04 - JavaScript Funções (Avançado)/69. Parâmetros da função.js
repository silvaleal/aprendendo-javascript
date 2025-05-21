// No javascript, as funções não serão obrigadas a ter os parâmetros claros, segue exemplo a baixo

function contador() {
    let total = 0
    
    // O arguments guarda todos os valores que a função recebeu
    // Nota de estudos: EU só acho útil usar os arguments, quando
    //  a função não tem uma quantidade de params fixos
    for (let num of arguments) {
        total += num
    }
    console.log(total)
}

contador(1, 2, 3, 4, 5, 6) // Repare que eu estou colocando os parâmetros nesta função

// Objetado como parâmetros
function funcHuman({ nome, idade, sexo }) {
    console.log(`Nome: ${nome}`)
    console.log(`Idade: ${idade}`)
    console.log(`Sexo: ${sexo}`)
}

funcHuman({
    nome: 'silvaleal',
    idade: 19,
    sexo: 'caba macho'
})

// Rest Operator
function myfunc(developer, age, ...stars) {
    // Lógica: Minha função está esperando infinitos argumentos, os 2 primeiros serão fixos,
    // Lembre: o REST OPERADOR (parâmetro infinito), sempre deve ser o último
    // depois podemos definir quantas stars quisermos.
    console.log(`O ${developer} (de ${age}y) ganhos as estrelas:`)

    for (let star of stars) {
        console.log(star)
    }
}

myfunc('silvaleal', 19, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)