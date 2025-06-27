import "./Pokemon.css";
import { useParams } from "react-router-dom";

export default function ExibirPokemon() {

  let id = useParams().id
  
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div>
      <div className="pokemon">
        <h2>Você é o Pokémon #{id}</h2>
        <img src={imageUrl} />
      </div>
    </div>
  );
}
