// Arrow Functions

// Função Tradicional
function dobro(n) {
  return n * 2;
}

// Arrow Function
// Muito usadas para manipulação de Arrays, puxa dados do backend;
const dobro2 = (n) => n * 2;

console.log(dobro(4));
console.log(dobro2(4));

let numeros = [1, 2, 3];
let dobrado = numeros.map((n) => n * 2);
console.log(dobrado);

// Templates Literals
let nome = "Alban";
let mensagem = `Bem-vindo, ${nome}!`;
console.log(mensagem)