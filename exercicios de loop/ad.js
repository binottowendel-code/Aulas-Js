const readline = require("readline-sync");
let num = Number(readline.question("Digite um numero: "))
while (isNaN(num)){
    num = Number(readline.question("Digite outro numero: "))
}