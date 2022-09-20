// Faça um programa que pede um número inteiro para o usuário e responde se ele é primo ou não.

let numero = prompt(`Me diga um número inteiro que te direi se ele é primo ou não`);

let teste = 0;

if(numero<2){
    teste +=2;
}

for(i=2; i<numero; i++){
    if(numero%i == 0){
        teste += 2;
    }
    teste += 0;
}

if(teste==0){
    alert(`${numero} é primo sim :D`);
} else {
    alert(`${numero} não é primo :P`);
}
