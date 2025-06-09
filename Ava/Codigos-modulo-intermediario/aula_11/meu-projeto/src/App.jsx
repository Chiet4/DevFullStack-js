import React from "react";
import Button from "./components/Button";
import Contador from "./components/Contador";

const App = () => {
  return (
    <div>
      <h2>Aula sobre components</h2>
      <Button label="Clique Aqui" />
      <Button label="Enviar" />

      <div>
        <Contador></Contador>
      </div>
    </div>
  );
};

export default App;
