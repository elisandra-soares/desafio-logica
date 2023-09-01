let nomeDoHeroi = "Elisandra";
let quantidadeXp = 8.000;

if (quantidadeXp < 1.000) {
    console.log(nomeDoHeroi + ", você é de Ferro!");
}
else if(quantidadeXp >= 1.001 && quantidadeXp <= 2.000) {
    console.log(nomeDoHeroi + ", você é de Bronze!");
}
else if(quantidadeXp >= 2.001 && quantidadeXp <= 5.000) {
    console.log(nomeDoHeroi + ", você é de Prata!");
}
else if(quantidadeXp >= 6.001 && quantidadeXp <= 7.000) {
    console.log(nomeDoHeroi + ", você é de Ouro!");
}
else if(quantidadeXp >= 7.001 && quantidadeXp <= 8.000) {
    console.log(nomeDoHeroi + ", você é de Platina!");
}
else if(quantidadeXp >= 8.001 && quantidadeXp <= 9.000) {
    console.log(nomeDoHeroi + ", você é Ascendete!");
}
else if(quantidadeXp >= 9.001 && quantidadeXp <= 10.000) {
    console.log(nomeDoHeroi + ", você é Imortal!");
}
else ("Radiante!");

console.log("O herói de nome " + nomeDoHeroi + " está no nível  " + quantidadeXp);

