// mostrar tabuada de algum numero
const readline = require("readline-sync")
let num1 = Number(readline.question("Digite o numero para ver a tabuada dele: "))
if ( isNaN(num1)){
    console.log("Valor inválido, insira um número.")
}
else{

for ( let i = 1; i <=10; i++){
    let resultado = num1 * i;
    console.log(num1, "x",i,"é igual a: ", resultado)
}
}
