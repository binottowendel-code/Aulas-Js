//exercicio para simular um caixa eletronico
const readline = require("readline-sync")
let saldo = 347.6;
let opcao = 0;
while (opcao !== "5"){
    console.log(" MENU \n");
    console.log("1- Ver Saldo");
    console.log("2- Sacar");
    console.log("3- Depositar");
    console.log("4- Transferir");
    console.log("5- Sair");
    opcao = readline.question("Digite a acao desejada: ")
    if(opcao === "1"){
        console.log("O seu saldo é: ", saldo)
    }
    else if( opcao === "2"){
    let vrsaque = Number(readline.question("Digite o valor que deseja sacar: "));
    if (isNaN(vrsaque) || vrsaque <= 0){
        console.log("Valor invalido");
        continue;
    }
    if(vrsaque > saldo){
        console.log("Saldo insuficiente.")
    }
    else{
        saldo -= vrsaque
        console.log("Operacao realizada, o saldo restante é:", saldo)
    }
    }
    else if( opcao === "3"){
        let vrdeposito = Number(readline.question("Digite o valor que gostaria de depositar: "));
         if (isNaN(vrdeposito) || vrdeposito <= 0){
        console.log("Valor invalido");
        continue;
         }
        saldo += vrdeposito;
        console.log("O saldo atual é: ", saldo)
    }
    else if( opcao === "4"){
        let vrtrans = Number(readline.question("Digite o valor que voce deseja transferir: "))
         if (isNaN(vrtrans) || vrtrans <= 0){
        console.log("Valor invalido");
        continue;
         }
        if ( vrtrans > saldo){
            console.log("Saldo insuficiente.")
        }
        else{
            let cpf = (readline.question("Digite o cpf da conta que deseja transferir: "))
            saldo -= vrtrans
            console.log("Voce fez uma transferencia de ", vrtrans, " para a conta com o cpf: ", cpf, ". o seu saldo atual é: ", saldo)
        }
    }
    else if(opcao === "5"){
        console.log("Atendimento encerrado.")
    }
    else{
        console.log("Acao invalida.")
    }
}