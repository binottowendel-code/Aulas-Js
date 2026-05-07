let num = [1,1,3,4,5,6,7,8,9,4,6,8];
let novonum = [];
for ( let valor of num){
    if ( !novonum.includes(valor) ){
        novonum.push(valor)
        
    }
}
console.log(novonum)