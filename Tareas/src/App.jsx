import logoReact from './assets/react.svg';
import './App.css';
import ListaTareas from './components/ListaTareas/ListaTareas';

function App (){
  return(
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img 
          className='logo'
          src={logoReact} 
          alt="logo" />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  )
}
export default App;