import { useState } from "react";

export default function GerenciamentoEstado() {

  const [contador, setContador] = useState(1)

  function incrementarContador() {
    setContador(contador+1);
    console.log(contador);
  }
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementarContador}>Incrementar</button>
    </div>
  );
}
