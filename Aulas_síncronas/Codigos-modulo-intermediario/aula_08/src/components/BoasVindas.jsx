import { useParams } from "react-router-dom";


export default function BoasVindas( {primeiroNome} ) {

  let nomeUsuario = useParams().nomeusuario

  return (
    <>
      <h2>Bem-vindo ao nosso site!</h2>
      <h3>{nomeUsuario ? nomeUsuario : primeiroNome}</h3>
    </>
  );
}
