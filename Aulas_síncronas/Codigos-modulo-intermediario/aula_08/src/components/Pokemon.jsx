import { useState } from "react";
import "./Pokemon.css";
import { useParams } from "react-router-dom";

export default function Pokemon() {

  const [pokemon, setPokemon] = useState(1);

  const gerarNovoPokemon = () => {
    const numeroAleatorio = Math.ceil(Math.random() * 1000) + 1;
    setPokemon(numeroAleatorio);
  };

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`;

  return (
    <div>
      <div className="pokemon">
        <h2>Você é o Pokémon #{pokemon}</h2>
        <img src={imageUrl} />
        <button onClick={gerarNovoPokemon}>Sortear Pokémon</button>
      </div>
    </div>
  );
}
