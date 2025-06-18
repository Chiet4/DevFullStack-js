import React, { useState, useEffect } from "react";
import "./PokemonAvancado.css";

export default function PokemonAvancado() {
  const [pokemon, setPokemon] = useState(null);

  const buscarPokemon = async () => {
    const id = Math.floor(Math.random() * 151) + 1; 
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    buscarPokemon();
  }, []);

  if (!pokemon) return <p>Carregando Pokémon...</p>;

  return (
    <div className="card-container">
      <h1>Meu Pokémon Aleatório</h1>
      <div className="card">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={pokemon.name}
        />
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <div className="tipos">
          {pokemon.types.map((tipo, index) => (
            <span key={index} className={`tipo ${tipo.type.name}`}>
              {tipo.type.name}
            </span>
          ))}
        </div>
        <div className="detalhes">
          <p>Altura: {pokemon.height / 10} m</p>
          <p>Peso: {pokemon.weight / 10} kg</p>
        </div>
        <div className="habilidades">
          <h3>Habilidades</h3>
          <ul>
            {pokemon.abilities.map((hab, index) => (
              <li key={index}>{hab.ability.name}</li>
            ))}
          </ul>
        </div>
        <div className="status">
          <h3>Estatísticas Base</h3>
          <ul>
            {pokemon.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      <button onClick={buscarPokemon}>Sortear Novo Pokémon</button>

      <footer>
        <p>Clique no botão acima ou atualize a página para ver um novo Pokémon!</p>
      </footer>
    </div>
  );
}
