// exercicio para somar todos os numeros inseridos
const readline = require("readline-sync");
let soma = 0;
 for ( i=1; i <=5; i++){
    let num1 = Number(readline.question("DIgite o numero que deseja somar: "));
    if(isNaN(num1)){
        console.log(("Valor inválido. "));
        i--; // para repetir a tentativa
        continue; // continuar a sequencia
    }
     soma += num1;
     
 }
 console.log("A soma de todos os números é: ", soma )

 