let mensagem = prompt("Escreva uma mensagem para que eu descodifique.\n É PARA USAR MAIÚSCULAS SEM ACENTO, HEIN?\n Mas como eu sou boazinha, também pode números e espaços");
let numero = Number(prompt("Agora escreva o NÚMERO de quantas posições foi o deslocamento:"));
let posicaoASCII = []; 
let posicaoASCIIcorreta = [];
let novaLetra = [];
let posicaoDoChar;

for(i=0; i<mensagem.length; i++){

    posicaoDoChar = mensagem.charCodeAt(i);
    posicaoASCII.push(posicaoDoChar);

    if((64+numero)<posicaoDoChar && posicaoDoChar<91){
        posicaoASCIIcorreta[i] = posicaoDoChar - numero;
    } else if(64+numero>posicaoDoChar && posicaoDoChar>64){
        posicaoASCIIcorreta[i] = 90-(numero - (posicaoDoChar-64));
    }else{
        posicaoASCIIcorreta[i] = posicaoDoChar;
    }
    novaLetra[i] = String.fromCharCode(posicaoASCIIcorreta[i]);
}

novaLetra.join('');

console.log(novaLetra);
