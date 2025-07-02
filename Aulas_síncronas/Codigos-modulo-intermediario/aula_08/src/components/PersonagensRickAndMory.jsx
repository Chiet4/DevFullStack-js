import { useEffect, useState } from "react";

const estilos = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    padding: "20px",
    background: "#f4f4f4"
  },
  titulo: {
    textAlign: "center",
    color: "blue"
  },
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0"
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "280px",
    border: "1px solid #ccc",
    borderRadius: "4px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px"
  },
  card: {
    background: "#fff",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  imagem: {
    width: "100%",
    borderRadius: "6px"
  },
  mensagem: {
    gridColumn: "1 / -1",
    textAlign: "center"
  }
};

export default function PersonagensRickAndMorty() {
  const [personagens, setPersonagens] = useState([]);
  const [campoBusca, setCampoBusca] = useState("");

  async function getPersonagens(url) {    
    const requisicao = await fetch(url);
    const personagemJson = await requisicao.json();
    setPersonagens(personagemJson.results || []);
  }

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?name=${campoBusca}`;
    getPersonagens(url);
  }, [campoBusca]);

  return (
    <div style={estilos.container}>
      <h1 style={estilos.titulo}>Lista de Personagens de Rick and Morty</h1>

      <div style={estilos.inputContainer}>
        <input
          type="text"
          value={campoBusca}
          placeholder="Digite um nome..."
          onChange={(e) => setCampoBusca(e.target.value)}
          style={estilos.input}
        />
      </div>

      <div style={estilos.grid}>
        {personagens.length > 0 ? personagens.map((personagem) => (
          <div key={personagem.id} style={estilos.card}>
            <img
              src={personagem.image}
              alt={personagem.name}
              style={estilos.imagem}
            />
            <h3>{personagem.name}</h3>
            <p>Espécie: {personagem.species}</p>
            <p>Status: {personagem.status}</p>
          </div>
        )) : (
          <p style={estilos.mensagem}>Nenhum personagem encontrado.</p>
        )}
      </div>
    </div>
  );
}
