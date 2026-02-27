let produto = {
  nome: "Smartphone",
  cor: "Azul",
  preco: 2500,
  estoque: 45
};


console.log("Nome do produto:", produto.nome);


console.log("Preço do produto:", produto["preco"]);


produto.estoque = 80;
console.log("Estoque atualizado:", produto.estoque);


for (let propriedade in produto) {
  console.log(propriedade + ":", produto[propriedade]);
}