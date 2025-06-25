import { use, useState } from "react";

export default function CarinhaFeliz(){
  const [ isApaixonado, setIsApaixonado ] = useState(true);
  const [ contador, setContador] = useState(1);

  function alterarSentimento(){
    setIsApaixonado(!isApaixonado)
    setContador(contador+1)
    console.log(isApaixonado)
    console.log(contador)
  }
  return (
    <div>
      <div style={ {fontSize: 150}} onClick={alterarSentimento}>
        {isApaixonado ? '😻' : '🐱'}
      </div>
      <h2>Contator: {contador}</h2>
    </div>

  )
}