const prompt = require('prompt-sync')()

let randomNumber = Math.floor(Math.random() * 100) + 1
let inputNumber 
let contador = 0


while(randomNumber !== inputNumber) {
    inputNumber = Number(prompt("Adivinhe o número : "))

    if (isNaN(inputNumber) || inputNumber < 0 || inputNumber > 100) {
        console.log("Digite um número válido")
    }

    contador++
    
    if (inputNumber < randomNumber) {
        console.log("Mais alto")
    } else if (inputNumber > randomNumber) {
        console.log("Mais baixo")
    }
    
}

console.log(`Você acertou o número em Nº ${contador}, Parabéns!!!`)