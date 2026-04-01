// exercicio para fazer um menu para adicionar ou remover numeros do array
const readline = require("readline-sync")
let num = [];
let opcao = 0;
while (opcao !== "3"){
    console.log("MENU \n");
    console.log("1- para adicionar um numero no array. \n");
    console.log("2- para remover um numero do array. \n");
    console.log("3- para finalizar o programa.\n");
    opcao = readline.question("Digite a opcao: ")
    if( opcao === "1"){
        let valoradd = Number(readline.question("Digite um numero para adicionar no array: "))
        if(isNaN(valoradd)){
            console.log("Valor invalido.")
          continue;  
        }
        num.push(valoradd);
        console.log("Array:",num)
    }
    else if ( opcao === "2"){
        let valorsub = Number(readline.question("Digite um valor para tirar do array: "))
        if(isNaN(valorsub)){
            console.log("Digite um valor valido.")
            continue;
        }
        let index = num.indexOf(valorsub);
        if ( index !== -1){
            num.splice(index, 1)
        }
        console.log("array: ",num)
        if( index === -1){
            console.log("Valor nao encontrado")
        }
    }
    else if( opcao === "3"){
        console.log("Programa finalizado.")
    }
    else{
        console.log("Opcao invalida")
    }
}