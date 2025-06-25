import React, { useState } from "react";

function ListaDeTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    const nova = {
      id: Date.now(),
      texto: novaTarefa,
      isConcluida: false,
    };

    setTarefas([...tarefas, nova]);
    setNovaTarefa("");
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, isConcluida: !tarefa.isConcluida }
          : tarefa
      )
    );
  };

  const estilos = {
    container: {
      width: "340px",
      margin: "40px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    },
    titulo: {
      textAlign: "center",
      marginBottom: "16px",
      fontWeight: "bold",
      fontSize: "20px",
    },
    input: {
      padding: "8px",
      marginRight: "6px",
      fontSize: "14px",
      width: "180px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    botao: {
      padding: "8px 12px",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      transition: "background-color 0.3s",
    },
    botaoRemover: {
      padding: "6px 10px",
      backgroundColor: "#f44336",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "13px",
      transition: "background-color 0.3s",
    },
    tarefa: {
      margin: "10px 0",
      padding: "6px 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #eee",
    },
    tarefaTexto: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    isConcluida: {
      textDecoration: "line-through",
      color: "#777",
    },
  };

  return (
    <div style={estilos.container}>
      <h2 style={estilos.titulo}>Lista de Tarefas</h2>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Nova tarefa"
          style={estilos.input}
        />
        <button onClick={adicionarTarefa} style={estilos.botao}>
          Adicionar
        </button>
      </div>
      <ul style={{ paddingLeft: 0, listStyle: "none" }}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} style={estilos.tarefa}>
            <div style={estilos.tarefaTexto}>
              <input
                type="checkbox"
                checked={tarefa.isConcluida}
                onChange={() => alternarConclusao(tarefa.id)}
              />
              <span style={tarefa.isConcluida ? estilos.isConcluida : {}}>
                {tarefa.texto}
              </span>
            </div>
            <button
              onClick={() => removerTarefa(tarefa.id)}
              style={estilos.botaoRemover}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
