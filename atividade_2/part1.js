let cores = [
    "azul",
    "vermelho",
    "verde",
    "amarelo",
    "preto",
    "branco",
    "roxo",
    "rosa",
    "lilas",
    "laranja",
    "cinza",
    "marrom",
    "magenta",
    "bege",
    "turquesa",
    "vinho",
    "dourado",
    "prata",
    "coral",
    "ciano",
]

console.log("Posição 0:", cores[0]);
console.log("Posição 7:", cores[7]);
console.log("Posição 11:", cores[11]);
console.log("Posição 15:", cores[15]);
console.log("Posição 18:", cores[18]);
console.log("Posição 20:", cores[20]);

console.log("Penúltimo:", cores[cores.length - 2]);
console.log("Último:", cores[cores.length - 1]);

console.log("Quantidade de elementos:", cores.length);

cores.push("ferrugem");
console.log("Novo elemento adicionado:", cores);

for (let i = 0; i < cores.length; i++) {
  console.log("Cor:", cores[i]);
}
