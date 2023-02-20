import "./App.css";
import Boton from './components/Boton/Boton.jsx';
import {Pantalla } from './components/Pantalla/Pantalla.jsx';
import BotonClear from './components/BotonClear/BotonClear.jsx';
import { useState } from "react";
import { evaluate } from 'mathjs';
import Logo from './components/Logo/Logo.jsx';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(`${input}${val}`)
  };

  const calcularResultado = ()=>{
    if (input === '') return;
    setInput(evaluate(input));
  };


  return (
    <div className="App">
      
      <Logo />

      <div className="contenedor-calculadora">

        <Pantalla input={input}/>

        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear 
            limpiarInput={() => setInput('')}
          >
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
