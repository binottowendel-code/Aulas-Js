// exercicio de login com 3 tentativas 
const readline = require("readline-sync")
let temlogin = readline.question("Voce ja possui cadastro? (sim/nao)").trim().toLowerCase();
let email, senha;
let tentativas = 0;
if (temlogin === "nao"){ // cadastro
    email = readline.question("crie o seu email: ");
    senha = readline.question("crie sua senha: ");
    console.log("O seu cadastro foi realizado!");
}
let emailentrar = readline.question("Digite o seu email: ")
let senhaentrar = readline.question("Digite a sua senha: ")
    
        
    while ( email !== emailentrar || senha !== senhaentrar){
            tentativas++
            console.log("Tente novamente.")
            if(tentativas >= 3){
                console.log("Numero de tentativas excedido.");
                break;
                
            }
            console.log("Dados incorretos, tente novamente.")
            emailentrar = readline.question("Digite o seu email: ");
            senhaentrar = readline.question("Digite sua senha: ");
            if( email === emailentrar && senha === senhaentrar){
            console.log("Login realizado!")
        }
        
}


