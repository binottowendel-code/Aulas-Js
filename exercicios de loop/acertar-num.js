//exercicio para simular brincadeira entre duas pessoas para acertar o numero
const readline = require("readline-sync")
let numescolhido = Number(readline.question("Digite o numero para o outro tentar advinhar: "));
if(isNaN(numescolhido)){
    console.log("Valor inválido, ")
    let numescolhido = Number(readline.question("Digite o numero para o outro tentar advinhar: "));
}
console.clear()
let tentativas = 0
let numtentado
while ( numtentado !== numescolhido){
    numtentado = Number(readline.question("Digite o numero para tentar acertar o escolhido: "))
    tentativas++
    if (numtentado === numescolhido){
        console.log("Parabens, voce acertou o numero!")
        console.log("O numero de tentativas foi: ", tentativas)
    }
    else{
        console.log("Numero incorreto!")
    }
    if(tentativas >=3){
        console.log("Numeros de tentativas excedido, o numero era:", numescolhido);
        break;
    }
}
