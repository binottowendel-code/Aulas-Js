// media de 4 notas com input
const readline = require("readline-sync");

let nota1 = Number(readline.question("Digite a 1a nota: "));
let nota2 = Number(readline.question("Digite a 2a nota: "));
let nota3 = Number(readline.question("Digite a 3a nota: "));
let nota4 = Number(readline.question("Digite a 4a nota: "));
let media = (nota1 + nota2 + nota3 + nota4) /4;
if (media >=6){
    console.log("a media do aluno é", media, ", O aluno está aprovado!");
}
else if (media <6){
    console.log("a media do aluno é", media, ",O aluno está reprovado");
}
else{
    console.log("Valor inválido");
}