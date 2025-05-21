// Declarando uma função hoisting
// As funções hoisting podem ser chamadas antes de serem "criadas", veja um exemplo:
setExample(); // Executando antes de criar

function setExample() { // Criando
    return "Example"
}

// First-class Objects
// Function expression
const myFunc = function() {
    console.log("Executando")
}
myFunc()

// Arrow functions
const arrowFunc = () => {

}

// 

(function () {
    console.log()
})