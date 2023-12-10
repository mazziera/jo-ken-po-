const placarJogador1 = document.querySelector('#placar-jogador-1');
const placarMaquina = document.querySelector('#placar-maquina');

let numeroPlacarJogadorUm = 0;
let numeroPlacarMaquina = 0;

const placarVitoria = 10;

// captando o valor html do clique do jogador
const jogadorClicou = (escolhaJogador) => {

    jogandoOJogo(escolhaJogador, escolhaMaquina())

}

//captando a escolha da maquina
const escolhaMaquina = () => {
    const opcao = ['pedra', 'papel', 'tesoura'];

    const numeroAleatorioEntreZeroE_Dois = Math.floor(Math.random() * 3);
    //Math.random sorteia um numero entre 0 e 1(0 - 0.9). multiplicando por 3, fará com que o resultado seja entre 0 e 2,9. O Math.floor, arredonda para baixo, sorteando entre 0 e 2.

    return opcao[numeroAleatorioEntreZeroE_Dois]

    
} 


const jogandoOJogo = (jogador, maquina) => {    
    const resultadoMaquina = document.querySelector('.jogada-maquina');
    const resultado = document.querySelector('.resultado');

    console.log(`Jogador: ${jogador} / Maquina: ${maquina}`);

    if (jogador === maquina){

        resultado.innerHTML = 'Empate!';
        resultado.style.color = 'gray';

    } else if (
        jogador === 'pedra' && maquina === 'tesoura' ||
        jogador === 'tesoura' && maquina === 'papel' ||
        jogador === 'papel' && maquina === "pedra"   ){

        numeroPlacarJogadorUm++;
        placarJogador1.innerHTML = numeroPlacarJogadorUm;

        resultado.innerHTML = 'Você Ganhou!';
        resultado.style.color = 'blue';


    } else {

        numeroPlacarMaquina++;
        placarMaquina.innerHTML = numeroPlacarMaquina;

        resultado.innerHTML = 'Você Perdeu!';
        resultado.style.color = 'red';
    }

    
    if(numeroPlacarJogadorUm >= placarVitoria){
        alert("Parabéns! Você venceu o jogo!");

        numeroPlacarJogadorUm = 0;
        placarJogador1.innerHTML = '0';

        numeroPlacarMaquina = 0;
        placarMaquina.innerHTML = '0';
        

    } else if(numeroPlacarMaquina >= placarVitoria) {

        alert("Que Pena! A Serina te derrotou!");

        numeroPlacarMaquina = 0;
        placarMaquina.innerHTML = '0';

        numeroPlacarJogadorUm = 0;
        placarJogador1.innerHTML = '0'
    }
    
    resultadoMaquina.innerHTML = `Serina escolheu: ${maquina}`;
    resultadoMaquina.style.color = 'green'
}
