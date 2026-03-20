const readline = require("readline-sync");

let num1 = Number(readline.question("Digite o 1o numero: "));
let num2 = Number(readline.question("Digite o 2o numero: "));
let operacao = readline.question("Digite a operacao:");
let res;
if (operação === "*"){
    res = num1 * num2;
    console.log("O resultado da multiplicação entre", num1, "e", num2, "é:", res );
}