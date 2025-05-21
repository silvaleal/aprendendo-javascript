// Funções callback são funções que ficaria dentro de outras funções para executar algo.
// Exemplo:

function resultadoDoCalculo(resultado) {
    console.log(`O resultado é ${resultado}`)
}

function calcular(calc, callback) {
    let resultado = eval(calc)
    callback(resultado)
}

calcular(calc=1+1, callback=resultadoDoCalculo)

// Uma função que usa callback é o setTimeout e tbm sistemas de rotas usam bastante