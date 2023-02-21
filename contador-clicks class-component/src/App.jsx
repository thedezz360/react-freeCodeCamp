import "./App.css";
import Boton from "./components/Boton/Boton";
import Contador from "./components/Contador/Contador";
import React, { useState } from "react";
//importamos logo
import logoReact from "./assets/react.svg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
    //necesario para pasar metodos como props
    this.sumarClics = this.sumarClics.bind(this);
    this.reiniciarClics = this.reiniciarClics.bind(this);
  }

  sumarClics() {
    //this.setState((estado)=>{console.log(estado.contador)})
    this.setState(({ contador }) => ({ contador: contador + 1 }));
  }

  reiniciarClics() {
    this.setState({ contador: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="logo-contenedor">
          <img className="logo" src={logoReact} alt="Logo" />
        </div>

        <div className="contenedor-contador">
          <Contador numClics={this.state.contador} />

          <Boton
            texto="Clic"
            esBotonDeClic={true}
            manejarClic={this.sumarClics}
          />

          <Boton
            texto="Reiniciar"
            esBotonDeClic={false}
            manejarClic={this.reiniciarClics}
          />
        </div>
      </div>
    );
  }
}

export default App;
