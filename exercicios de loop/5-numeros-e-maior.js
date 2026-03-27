// exercicios para verificar qual o maior numero inserido
const readline = require("readline-sync")
let maior = null //maior numero
for ( i = 1; i <=5; i++){
    let num1 = Number(readline.question("Digite o numero que deseja comparar: ").trim())
    if (isNaN(num1)){
        console.log("Valor inválido.")
        i--;
        continue;
    }
    if( maior === null || num1 > maior){
        maior = num1
    }

}
console.log("O maior numero dentre os inseridos é: ", maior)