//## Objetivo:
//Crie uma funcao que recebe como parametro a quantidade de vitorias e derrotas de um jogador,
//depois disso retorne o resultado para uma variavel, o saldo de Rankeadas deve ser feito atravas do calculo (vitorias - derrotas)
//Se vitorias for menor do que 10 = Ferro
//Se vitorias for entre 11 e 20 = Bronze
//Se vitorias for entre 21 e 50 = Prata
//Se vitorias for entre 51 e 80 = Ouro
//Se vitorias for entre 81 e 90 = Diamante
//Se vitorias for entre 91 e 100= Lendario
//Se vitorias for maior ou igual a 101 = Imortal
//## Saida
//Ao final deve se exibir uma mensagem:
//"O Heroi tem de saldo de **{saldoVitorias}** esta no nivel de **{nivel}**"//

let heroi = "Paladino";
let vitorias = 53;
let derrotas = 17;
let resultado = vitorias - derrotas;


if (resultado <= 10) {
    nivel = "Ferro";
} else if (resultado > 10 && resultado <= 20) {
    nivel = "Bronze";
} else if (resultado > 20 && resultado <= 50) {
    nivel = "Prata";
} else if (resultado > 50 && resultado <= 80) {
    nivel = "Ouro";
} else if (resultado > 80 && resultado <= 90) {
    nivel = "Diamante";
} else if (resultado > 90 && resultado <= 100) {
    nivel = "Lendario";
} else if (resultado > 100) {
    nivel = "Imortal";
}

console.log("O Heroi: " + heroi + " tem saldo de vitórias: " + resultado + " e está no nível " + nivel);
