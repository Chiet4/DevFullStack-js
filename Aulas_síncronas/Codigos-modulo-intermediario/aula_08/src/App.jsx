import "./App.css";
import BoasVindas from "./components/BoasVindas";
import {
  Somar,
  Subtrair,
  Dividir,
  Multiplicar,
} from "./components/Calculadora";
import MaoDeDados from "./components/MaoDeDados";
import Pokemon from "./components/Pokemon";
import PokemomAvancado from "./components/PokemonAvancado";

function App() {
  return (
    <>
      {/* <h1>FSM2 - FullStack</h1>
      <BoasVindas primeiroNome = "João" segundoNome = "Pedro"></BoasVindas>

      <h2>Calculadora</h2>
      <p>
        <Somar valor1={10} valor2={5} />
      </p>
      <p>
        <Subtrair valor1={10} valor2={5} />
      </p>
      <p>
        <Multiplicar valor1={10} valor2={5} />
      </p>
      <p>
        <Dividir valor1={10} valor2={5} />
      </p>

      <MaoDeDados /> */}
      <PokemomAvancado></PokemomAvancado>
    </>
  );
}

export default App;
