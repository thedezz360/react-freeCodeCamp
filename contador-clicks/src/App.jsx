import "./App.css";
import Boton from "./components/Boton/Boton";
import Contador from "./components/Contador/Contador";
import { useState } from "react";
//importamos logo
import logoReact from "./assets/react.svg";

function App() {
  const [contador, setContador] = useState(0);

  function sumarClics() {
    setContador(contador + 1);
    console.log("clic");
  }

  function reiniciarClics() {
    setContador(0);
    console.log("reiniciar");
  }

  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="logo" src={logoReact} alt="Logo" />
      </div>

      <div className="contenedor-contador">
        <Contador numClics={contador} />

        <Boton 
          texto="Clic" 
          esBotonDeClic={true} 
          manejarClic={sumarClics} 
        />

        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarClics}
        />

      </div>
    </div>
  );
}

export default App;
