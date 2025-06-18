import './JogoDado.css';

export default function JogoDado() {
  let numeroAleatorio = Math.floor(Math.random() * 6) + 1;
  return (
    <div className="jogo-dado">
      <h2>Jogo do Dado</h2>
      <p>O valor do dado é: {numeroAleatorio} </p>
    </div>
  );
}