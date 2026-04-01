// exercicio de criaçao de menu para adiçao ou subtraçao
const readline = require("readline-sync")
let opcao = 0;
let num1, num2;
while (opcao !== "3"){
    console.log("Escolha \n");
    console.log("1- Adicao \n");
    console.log("2- subtracao \n");
    console.log("3- Sair \n");
    opcao = readline.question("Escolha uma opcao: ")
    if ( opcao === "1"){
        num1 = Number(readline.question("Digite o 1o numero: "))
        num2 = Number(readline.question("Digite o 2o numero: "))
        console.log("O resultado é: ", num1 + num2)
    }
    else if( opcao === "2"){
        num1 = Number(readline.question("Digite o 1o numero: "))
        num2 = Number(readline.question("Digite o 2o numero: "))
        console.log("O resultado é: ", num1 - num2)
    }
    else if( opcao === "3"){
        console.log("Programa finalizado.")
    }
    else{
        console.log("Opcao invalida.")
    }
}
