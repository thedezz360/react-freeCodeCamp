import TareaFormulario from "../TareaFormulario/TareaFormulario";
import './ListaTareas.css';
import { useState } from "react";
import Tarea from '../Tarea/Tarea.jsx'

function ListaTareas(){

	const [tareas, setTareas] = useState([]);

	const agregarTarea = (tarea)=>{
		
		//comprovamos si se ha escrito algo 
		if(tarea.texto.trim()){
			//eliminamos espacios
			tarea.texto = tarea.texto.trim();
			//creamos array agregando la tarea nueva
			const tareasActualizadas = [tarea, ...tareas];
			//actualizamos el valor de las tareas
			setTareas(tareasActualizadas);
		
		}
	};

	const eliminarTarea = (id)=>{
		//generamos un array sin la tarea que tenga el id 
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		//actualizamos las tareas
		setTareas(tareasActualizadas);
	};

	const completarTarea = (id)=>{
		const tareasActualizadas = tareas.map(tarea => {
			if(tarea.id === id){
				tarea.completada = !tarea.completada;
			}
			return tarea;
		});
		setTareas(tareasActualizadas);
	};

  return(
		<>
			<TareaFormulario onSubmit={agregarTarea} />
			<div className="tareas-lista-contenedor">
				{
					tareas.map((tarea)=>
						<Tarea 
							key={tarea.id}
							id={tarea.id}
							texto={tarea.texto}
							completada={tarea.completada}
							completarTarea={completarTarea}
							eliminarTarea={eliminarTarea}
						/>
					)
				}
			</div>
		</>
	)
}

export default ListaTareas;