//Faça um programa que receba um número N e imprima a tabuada de N (de N x 1 a N x 10).

let numeroN = prompt(`De qual número você quer saber a tabuada?`);

let resultado=0;

for(i=1; i<11; i++){
    resultado = numeroN*i;
    console.log(`${numeroN} X ${i} = ${resultado}\n`)
}
