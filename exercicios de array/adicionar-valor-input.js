// exercicio de pedir para o usuario adicionar 5 valores no array
const readline = require("readline-sync")
let numero = [];
for ( i = 1; i <= 5; i++){
    let valor = Number(readline.question("Digite um valor para inserir no array: "))
    numero.push(valor)
}
console.log(numero)