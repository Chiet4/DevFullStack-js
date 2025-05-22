// Funções
function calcArea(largura, altura) {
  return largura * altura;
}

console.log(calcArea(21, 16));

console.log("\n----------\n");

// Eventos
function mostrarMensagem() {
  alert("Dados enviados...");
}

// Objeto e métodos
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  descricao: function () {
    return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
  },
};

console.log(carro.descricao())