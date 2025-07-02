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
import GerenciamentoEstado from "./components/GerenciamentoEstado"
import CarinhaFeliz from "./components/CarinhaFeliz";
import ExibirPokemon from "./components/ExibirPokemon"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import TodoList
 from "./components/TodoList";
import NotFound from "./components/NotFound";
import Teste_useeffect from "./components/Teste_useeffect";
import PersonagensRickAndMory from "./components/PersonagensRickAndMory";
function App() {
  return (
    <>
    <BrowserRouter>
    <div className="menu">
      <nav>
        <a href="/"> Home</a>
        <a href="/boasvindas">Boas Vindas</a>
        <a href="/maodedados">Mão de Dados</a>
        <a href="/pokemonavancado">Pokemon Avancado</a>
        <a href="/pokemon">Pokemon</a>
        <a href="/teste_useeffect">Use Effect</a>
        <a href="/gerenciamentoestado">Gerenciamento de Estado</a>
        <a href="/rickandmorty">Rick & Morty</a>
        <a href="/carinhafeliz">Carinha Feliz</a>
        <a href="/todolist">Todo List</a>
      </nav>
    </div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/boasvindas" element={<BoasVindas primeiroNome = "Sem nome" segundoNome = "Sem sobrenome"></BoasVindas>}></Route>
      <Route path="/boasvindas/:nomeusuario" element={<BoasVindas primeiroNome = "Sem nome" segundoNome = "Sem sobrenome"></BoasVindas>}></Route>
      <Route path="/maodedados" element={<MaoDeDados />}></Route>
      <Route path="/pokemonavancado" element={ <PokemomAvancado></PokemomAvancado>}></Route>
      <Route path="/pokemon" element={<Pokemon></Pokemon>}></Route>
      <Route path="/pokemon/:id" element={<ExibirPokemon/>}></Route>
      <Route path="/teste_useeffect" element={<Teste_useeffect></Teste_useeffect>}></Route>
      <Route path="/rickandmorty" element={<PersonagensRickAndMory></PersonagensRickAndMory>}></Route>
      <Route path="/gerenciamentoestado" element={<GerenciamentoEstado></GerenciamentoEstado>}></Route>
      <Route path="/carinhafeliz" element={<CarinhaFeliz></CarinhaFeliz> }></Route>
      <Route path="/todolist" element={<TodoList></TodoList>}></Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
