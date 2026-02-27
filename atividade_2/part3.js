let produtos = [
  { nome: "Mouse", preco: 80, estoque: 120 },
  { nome: "Teclado", preco: 150, estoque: 90 },
  { nome: "Monitor", preco: 900, estoque: 40 },
  { nome: "Headset", preco: 200, estoque: 60 },
  { nome: "Webcam", preco: 250, estoque: 30 },
  { nome: "Notebook", preco: 3500, estoque: 25 },
  { nome: "Cadeira", preco: 1200, estoque: 15 },
  { nome: "HD Externo", preco: 400, estoque: 70 },
  { nome: "Pen Drive", preco: 50, estoque: 200 },
  { nome: "Impressora", preco: 800, estoque: 10 }
];


console.log("Preço do segundo objeto:", produtos[1].preco);


console.log("Nome do terceiro objeto:", produtos[2].nome);


console.log("Quantidade de itens:", produtos.length);


for (let i = 0; i < produtos.length; i++) {
  console.log("Produto:", produtos[i].nome);
}


let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
  totalEstoque += produtos[i].estoque;
}
console.log("Total de estoque:", totalEstoque);


let maiorEstoque = produtos[0];

for (let i = 1; i < produtos.length; i++) {
  if (produtos[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = produtos[i];
  }
}