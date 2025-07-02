import { useEffect, useState } from "react";

export default function Teste_useeffect() {
  const [texto1, setTexto1] = useState("Texto inicial 1");
  const [texto2, setTexto2] = useState("Texto inicial 2");

  useEffect(() => {
    console.log("useEffect foi executado porque texto1 mudou");
  }, [texto1]);

  function alterarTexto1() {
    setTexto1("NOVO TEXTO 1");
  }

  function alterarTexto2() {
    setTexto2("NOVO TEXTO 2");
  }

  return (
    <div>
      <p>{texto1}</p>
      <p>{texto2}</p>

      <button onClick={alterarTexto1}>Alterar texto 1</button>
      <button onClick={alterarTexto2}>Alterar texto 2</button>
    </div>
  );
}
