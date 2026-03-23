// sistema de cadastro e login
let email, senha;
const readline = require("readline-sync")
let resposta = readline.question("Voce possui conta? (sim/nao)").toLowerCase().trim();
if (resposta === "nao"){
     email = readline.question("Crie seu email: ")
     senha = readline.question("Crie sua senha: ")
    console.log("Cadastro realizado!")
}
if ( resposta === "sim" || resposta === "nao"){
     emailentrar = readline.question(" Digite o seu email: ");
     senhaentrar = readline.question(" Digite a sua senha: ");
    if ( emailentrar === email && senhaentrar === senha){
    console.log("Login realizado!");
}
else{
    console.log("Dados incorretos!")
}
}
