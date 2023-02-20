import TareaFormulario from "../TareaFormulario/TareaFormulario";
import './ListaTareas.css';
import { useState } from "react";
import Tarea from '../Tarea/Tarea.jsx'

function ListaTareas(){

	const [tareas, setTareas] = useState([]);

	const agregarTarea = (tarea)=>{
		console.log(tarea)
	}

  return(
		<>
			<TareaFormulario />
			<div className="tareas-lista-contenedor">
				{
					tareas.map((tarea)=>{
						<Tarea 
							texto={tarea.texto}
							completada={tarea.completada}
						/>
					})
				}
			</div>
		</>
	)
}

export default ListaTareas;