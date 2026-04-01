// exercicio de pedir senha ate a pessoa acertar
const readline = require("readline-sync")
let senhatentada;
let senhacerta = readline.question("Digite a senha: ")
console.clear();
while (senhacerta !== senhatentada){
    senhatentada = readline.question("Digite a senha correta: ");
    if( senhacerta === senhatentada){
        console.log("Voce acertou a senha!")
    }
}