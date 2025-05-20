// Estruturas condicionais
// if
// if... else if... else

let idade = 59;

if (idade < 18) {
  console.log("Menor de idade.");
} else if (idade <= 40) {
  console.log("Jovem");
} else if (idade < 65) {
  console.log("Adulto");
} else {
  console.log("idoso");
}

console.log("----------\n");

// Repetições
// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("----------\n");

// while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

console.log("----------\n");

// do while
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
console.log("10" + 20);

console.log("\n----------\n");

// forEach simples
let pessoas = ["Joao", "Maria", "Jose"];
pessoas.forEach((valorAtual, indice) => {
  console.log(valorAtual, indice);
});

console.log("\n----------\n");

// array de produtos

let produtos = [
  { nomeProduto: "Celular", valorProduto: 1200.0, porcentagemDesconto: 0.2 },
  { nomeProduto: "Notebook", valorProduto: 2500.0, porcentagemDesconto: 0.3 },
  { nomeProduto: "Televisão", valorProduto: 3500.0, porcentagemDesconto: 0.35 },
];

produtos.forEach((produtoAtual) => {
  console.log(produtoAtual);
});

produtos.forEach((produtoAtual) => {
  let valorPosDesconto =produtoAtual.valorProduto * produtoAtual.porcentagemDesconto;
  let valorTotal = produtoAtual.valorProduto - valorPosDesconto
  produtoAtual.valorTotalProduto = valorTotal
  console.log(produtoAtual)
});
