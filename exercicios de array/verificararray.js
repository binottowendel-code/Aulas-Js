// exercicio para verificar se ja existe numero dentro do array
const readline = require("readline-sync")
let num = [1,22,33,11,22];
let procura = Number(readline.question("Digite um numero para verificar no array: "))
if (num.includes(procura)){
    console.log("O numero foi encontrado.");
    console.log("A posição do numero no array é: ", num.indexOf(procura))
}
else{
    console.log("O numero nao existe no array.")
}
