import './TareaFormulario.css';
import { useState } from 'react';

function TareaFormulario(props) {

	const [input, setInput]= useState('');

	const manejarCambio = (e)=>{
		console.log('escribiendo');
		setInput(e.target.value)
		console.log(input);
	}

	const manejarEnvio = (e)=>{
		const tareaNueva={
			id: '123',
			texto: 'hola'
		}
	};

  return (
    <form className="tarea-formulario">
      <input
        type="text"
        className="tarea-input"
        placeholder="Escribe una tarea"
        name="texto"
				onChange={manejarCambio}
      />
      <button className="tarea-boton">Agregar tarea</button>
    </form>
  );
}

export default TareaFormulario;
