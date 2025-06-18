
function Somar({ valor1, valor2 }) {
  return <div>Resultado da soma: {valor1 + valor2}</div>;
}

function Subtrair({ valor1, valor2 }) {
  return <div>Resultado da subtração: {valor1 - valor2}</div>;  }

function Multiplicar({ valor1, valor2 }) {
  return <div>Resultado da multiplicação: {valor1 * valor2}</div>;
} 

function Dividir({ valor1, valor2 }) {
  return <div>Resultado da divisão: {valor1 / valor2}</div>;
} 

export { Somar, Subtrair, Multiplicar, Dividir };