//Crie um código que peça 2 valores inteiros X e Y ao usuário.
//A seguir, calcule e mostre a soma dos números ímpares entre eles (considerando também os valores X e Y).

let primeiroNumero = Number(prompt("Me digite o primeiro número?"));
let segundoNumero = Number(prompt("Agora coloca o segundo aí, please:"));

let soma = 0;

for(i=primeiroNumero; i<=segundoNumero; i++){
    if((i%2)==1){
        soma += i;
    }
}

console.log(`A soma dos números ímpares entre seus números é de ${soma}`);
