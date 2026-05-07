const readline = require("readline-sync")
let num = [];
for ( i = 1; i<=5; i++){
    let valor = Number(readline.question("Digite o numero para colocar no array: "))
    num.push(valor)
}
console.log(num)
