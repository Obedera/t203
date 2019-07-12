// function somar(a=9, b){
//     return Number(a+b); 
//     return encerra a função ou o final da função
// }
// console.log(somar(2,4));

function fazerEscada(material, degraus){
    let escada = material;
    for(let i=0; i<degraus; i++){
        console.log(escada);
        escada += material;
    }
}

function parOuImpar(a){
    
    if (a%2==0){
        return 'É par';
    }
    else{
        return 'É impar';
    }
}

const aleatorio = function (min, max){
    // return Math.floor(Math.random()*100); de 0 a 100
    return Math.floor(Math.random()*(max-min))+min;
}