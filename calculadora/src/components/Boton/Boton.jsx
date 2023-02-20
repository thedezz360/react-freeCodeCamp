import './Boton.css'

function Boton({children, manejarClic}) {


	const esOperador = value => {
		//si no es un numero, un punto(.) o un igual(=) es un operador 
		return isNaN(value) && (value !== '.') && (value !== '=') ;
	};

  return (
		<button
			className={`boton-contenedor ${esOperador(children) ? 'operador' : '' }`.trimEnd()}
			onClick={()=>manejarClic(children)}
		>
			{children}
		</button>
	)
}

export default Boton;
