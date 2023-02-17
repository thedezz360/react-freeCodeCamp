import './BotonClear.css'

const BotonClear = (props) => (
	<div 
		className="boton-clear"
		onClick={props.limpiarInput}
	>
		{props.children}
	</div>);

export default BotonClear;