// As funções recursivas é uma função que se chama de volta.
// No javascript possui um certo limite de recursividade

function recursiva(number) {
    if (number>10) return
    console.log(number++)
    recursiva(number)
}

recursiva(1)

// Me lembra o While