//Crie um Melhor de Três para o jogo "Pedra, Papel, Tesoura”, ou seja, você vai colocar dois usuários para jogarem esse jogo três vezes. 
//Aquela(e) que ganhar mais rodadas vence o jogo.
//Você irá repetir o jogo 3 vezes e contar quantas rodadas cada jogador venceu.
//Aquele que tiver mais vitórias será, de fato, o vencedor do jogo.
//Em caso de empate, você deve adicionar novas rodadas, até que seja definido um(a) vencedor(a).

let usuario1Array = [];
let usuario2Array = [];
let usuario1;
let usuario2;
let pontosUsuario1=[];
let pontosUsuario2=[];
let somaUsuario1 = 0;
let somaUsuario2 = 0;

for(i=0; i<3; i++){

    usuario1 = Number(prompt(`Oi, PRIMEIRO jogador! Qual será sua ${i+1}ª jogada?\n DIGITE APENAS NÚMEROS\n LEGENDA:\n 1 - Pedra\n 2 - Papel\n 3 - Tesoura`));

    if(usuario1!=1 && usuario1!=2 && usuario1!=3){
        while(usuario1!=1 && usuario1!=2 && usuario1!=3){
                usuario1 = Number(prompt(`UEPA! Amigo, digite uma das opções: 1, 2 ou 3 para sua ${i+1}ª jogada\n se não, não rola`));
        }
    }

    usuario2 = Number(prompt(`E aí, SEGUNDO jogador! Qual será sua ${i+1}ª jogada?\n DIGITE APENAS NÚMEROS\n LEGENDA:\n 1 - Pedra\n 2 - Papel\n 3 - Tesoura`));
    if(usuario2!=1 && usuario2!=2 && usuario2!=3){
        while(usuario2!=1 && usuario2!=2 && usuario2!=3){
                usuario2 = Number(prompt(`UEPA! Amigo, digite uma das opções: 1, 2 ou 3 para sua ${i+1}ª jogada\n se não, não rola`));
        }
    }

    usuario1Array[i] = usuario1;
    usuario2Array[i] = usuario2;

    if(usuario1Array[i]==1){
        if(usuario2Array[i]==1){
            pontosUsuario1[i]=0;
            pontosUsuario2[i]=0;
        } else if(usuario2Array[i]==2){
            pontosUsuario1[i]=0;
            pontosUsuario2[i]= 1;
        } else if (usuario2Array[i]==3){
            pontosUsuario1[i]=1;
            pontosUsuario2[i]=0;
        }
    }

    if(usuario1Array[i]==2){
        if(usuario2Array[i]==1){
            pontosUsuario1[i]=1;
            pontosUsuario2[i]=0;
        } else if(usuario2Array[i]==2){
            pontosUsuario1[i]=0;
            pontosUsuario2[i]= 0;
        } else if (usuario2Array[i]==3){
            pontosUsuario1[i]=0;
            pontosUsuario2[i]=1;
        }
    }

    if(usuario1Array[i]==3){
        if(usuario2Array[i]==1){
            pontosUsuario1[i]=0;
            pontosUsuario2[i]=1;
        } else if(usuario2Array[i]==2){
            pontosUsuario1[i]=1;
            pontosUsuario2[i]= 0;
        } else if (usuario2Array[i]==3){
            pontosUsuario1[i]=0;
            pontosUsuario2[i]=0;
        }
    }

    somaUsuario1 += pontosUsuario1[i];
    somaUsuario2 += pontosUsuario2[i];
}

if(somaUsuario1==somaUsuario2){
    while(somaUsuario1==somaUsuario2){
        alert(`UEPA! Deu EMPATE! Bora fazer mais uma partida?`);

        usuario1 = Number(prompt(`Oi, PRIMEIRO jogador! Vamos de novo?\n LEGENDA:\n 1 - Pedra\n 2 - Papel\n 3 - Tesoura\n (se digitar errado perde toda a partida :D)`));
        usuario2 = Number(prompt(`E aí, SEGUNDO jogador Vamos de novo?\n LEGENDA:\n 1 - Pedra\n 2 - Papel\n 3 - Tesoura\n (se digitar errado perde toda a partida :D)`));

        if(usuario1==1){
            if(usuario2==1){
                somaUsuario1=0;
                somaUsuario2=0;
            } else if(usuario2==2){
                somaUsuario1=0;
                somaUsuario2= 1;
            } else if (usuario2==3){
                somaUsuario1=1;
                somaUsuario2=0;
            }
        }

        if(usuario1==2){
            if(usuario2==1){
                somaUsuario1=1;
                somaUsuario2=0;
            } else if(usuario2==2){
                somaUsuario1=0;
                somaUsuario2= 0;
            } else if (usuario2==3){
                somaUsuario1=0;
                somaUsuario2=1;
            }
        }

        if(usuario1==3){
            if(usuario2==1){
                somaUsuario1=0;
                somaUsuario2=1;
            } else if(usuario2==2){
                somaUsuario1=1;
                somaUsuario2= 0;
            } else if (usuario2==3){
                somaUsuario1=0;
                somaUsuario2=0;
            }
        }

        console.log(somaUsuario1);
        console.log(somaUsuario2);
    }

} 

if(somaUsuario1>somaUsuario2){
    alert(`Parabéns, PRIMEIRO jogador! Você ganhou! Pode fazer bullying com o SEGUNDO`);
} else if(somaUsuario2>usuario1){
    alert(`Parabéns, SEGUNDO jogador! Você ganhou! Pode fazer bullying com o PRIMEIRO`);
}
