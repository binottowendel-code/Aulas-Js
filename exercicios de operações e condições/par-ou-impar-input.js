// Numeor par ou impar com input
const readline = require("readline-sync");

let numero = Number(readline.question("Digite um numero:"));
if (numero % 2 === 0){
    console.log("o número ", numero," é par");
}
else{
    console.log("Numero inválido");
}