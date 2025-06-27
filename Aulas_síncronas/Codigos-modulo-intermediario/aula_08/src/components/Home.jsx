export default function Home() {
  const estilos = {
    container: {
      width: "340px",
      padding: "20px",
    },
    titulo: {
      textAlign: "center",
      marginBottom: "16px",
      color: "Black",
      fontWeight: "bold",
      fontSize: "20px",
    },
  };
  return (
    <div style={estilos.container}>
      <h1 style={estilos.titulo}>FSM2</h1>
    </div>
  );
}
