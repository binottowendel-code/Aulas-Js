//exercicio para mostrar o maior numero do array
let num = [1,2,3,4,55,6,7,8,9,22,33,44,]
let maior = 0;
for ( let valor of num){
    if ( valor > maior){
        maior = valor
    }
}
console.log(maior)