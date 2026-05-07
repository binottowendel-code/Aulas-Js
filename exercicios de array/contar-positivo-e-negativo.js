//exercicio para contar a quatidade de numeros negativos e positivos dentro do array
let num = [1,2,3,-2,-4,-5]
let contpos = 0;
let contneg = 0;
for (let valor of num){
    if(valor >=0){
        contpos++
    }
    else if ( valor < 0){
        contneg ++
    }
 
}   console.log("A quantidade de numeros positivos é:", contpos, " e a de numeros negativos é:", contneg);