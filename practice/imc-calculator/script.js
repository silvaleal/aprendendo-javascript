function calcImc() {

    var inputPeso = parseInt(document.getElementById('peso').value)
    let inputAltura = parseInt(document.getElementById('altura').value)
    const elmtResult = document.getElementById('resultado')
    var imc = document.createElement('h1')

    altura = inputAltura / 100
    var result = inputPeso / (altura*altura)

    if (result < 18.5) {
        message = "abaixo do peso"
    }
    else if (result >= 18.5 && result <= 24.9) {
        message = "peso saudável"
    }
    else if (result >= 25 && result <= 29.9) {
        message = "sobrepeso"
    }
    else if (result >= 30 && result <= 39.9) {
        message = "obeso"
    }
    else if (result >= 40) {
        message = "Procure um médico"
    }
    imc.textContent = message

    elmtResult.appendChild(imc)
}