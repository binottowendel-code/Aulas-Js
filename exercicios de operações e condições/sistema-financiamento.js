//sistema de financiamento
const readline = require("readline-sync")
let idade = Number(readline.question("Digite a idade do cliente: "));
let resposta = readline.question("O cliente tem o nome limpo? (sim/nao)").toLowerCase().trim()
if (idade >= 18 && resposta === "sim"){
    console.log("O cliente possui os requisitos para o financiamento.")
    let salario = Number(readline.question("Digite o salario do cliente: "));
let valorfin = Number(readline.question("DIgite o valor do financiamento: "))
let parcela = valorfin *0.05
if (salario * 0.30 > parcela){
    console.log("O financiamento foi aprovado!")

}
else{
    console.log("O financiamento foi reprovado por renda insuficiente.")
}
}
else{
    
    if(idade <18){
        console.log("Idade insuficiente.");

    }
    else{
        console.log("O cliente possui nome sujo.")
    }
}



