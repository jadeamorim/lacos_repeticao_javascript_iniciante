// Faça um programa que lê um número inteiro do teclado e calcula o seu fatorial. 
// O fatorial de um número é o produto entre ele e os seus antecessores inteiros positivos.


let numero = Number(prompt("Vamos calcular? Me diga o número que te direi o fatorial dele: "));

resultado = 1;

for(i=1;i<=numero;i++){
    resultado *= i;
}

alert(`O fatorial de ${numero} é ${resultado}`);
