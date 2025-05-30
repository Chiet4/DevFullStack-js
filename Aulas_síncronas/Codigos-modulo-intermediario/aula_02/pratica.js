let numeros = [];
for (let i = 23; i < 54; i++) {
  numeros[i] = i;
  console.log(numeros[i]);
}

console.log("\n-----------------");
let nomes = ["Dino", "Baby", "Charlote"];

nomes.map((nome) => {
  console.log(nome + " da Silva Sauro");
});
