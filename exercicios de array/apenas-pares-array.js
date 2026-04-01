// mostrar a quantidade de numeros pares do array
let num = [1,2,3,4,5,6,7,8,9];
let numpar = 0;
for ( let valor of num ){
    if(valor % 2 === 0){
        numpar++
    }
}
console.log(numpar)