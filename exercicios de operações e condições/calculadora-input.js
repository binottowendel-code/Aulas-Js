//calculadora simples com input
const readline = require("readline-sync");

let num1 = Number(readline.question("Digite o 1o numero: "));
let num2 = Number(readline.question("Digite o 2o numero: "));
let operacao = readline.question("Digite a operacao:");
let res;
if (operacao === "*"){
    res = num1 * num2;
     console.log("O resultado da multiplicação entre", num1, "e", num2, "é:", res );
    
}
if (operacao === "/"){
    res = num1 / num2;
        console.log("O resultado da divisão entre", num1, "e", num2, "é:", res );
    
}
else if (operacao === "+"){
    res = num1 + num2;
        console.log("O resultado da soma entre", num1, "e", num2, "é:", res );
    
}
else if (operacao === "-"){
    res = num1 - num2;
        console.log("O resultado da subtração entre", num1, "e", num2, "é:", res );
    
}
else{
    console.log("Valor inválido");
}
