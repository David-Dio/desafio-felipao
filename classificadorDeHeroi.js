console.log("*****CLASSIFICADOR DE NIVEL DO HEROI*****")

let heroi = "Flash"
let xp = 0
let nivel = ""

if (xp < 1000) {
     nivel = "Ferro"
}else if (xp > 1001 && xp < 2000) {
    nivel = "Bronze"
}else if (xp > 2001 && xp < 5000) {
    nivel = "Prata"
}else if (xp > 5001 && xp < 7000) {
    niverl = "Ouro"
}else if (xp > 7001 && xp < 8000) {
    nivel = "Platina"
}else if (xp > 8001 && xp < 9000) {
    nivel = "Ascendente"
}else if (xp > 9001 && xp < 10000) {
    nivel = "Imortal"
}else if (xp > 10000) {
    nivel = "Radiante"
}

console.log("O Heroi: " + heroi, "está no nivel: " + nivel);