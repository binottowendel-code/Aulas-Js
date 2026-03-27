// exercicio de contagem de numeros pares 
const readline = require("readline-sync")
numpar = 0;
for (i = 1; i <= 5; i++){
    let num1 = Number(readline.question("DIgite os numeros para verificar quantos sao pares: ").trim())
    if (isNaN(num1)){
        console.log("Digite um valor válido.")
        i--;
        continue;
    }
    if ( numpar === null || num1 % 2 === 0 ){
        numpar ++
    }
}
console.log("Os numeros pares são: ", numpar)