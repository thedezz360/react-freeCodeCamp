
import './App.css';
//importamos logo
import logoReact from './assets/react.svg';
import Boton from './components/Boton/Boton';
import Contador  from './components/Contador/Contador';


function App() {

  function sumarClics(){
    console.log('clic')
  }

  function reiniciarClics(){
    console.log('reiniciar')
  }


  return (
    <div className="App">
      <div className="logo-contenedor">
        <img 
          className='logo' 
          src={logoReact} 
          alt="Logo" 
        />
      </div>


      <div className='contenedor-contador'>
      <Contador numClics='1' />
        <Boton 
          texto='Clic' 
          esBotonDeClic={true}
          manejarClic={sumarClics}
        />
        <Boton 
          texto='Reiniciar' 
          esBotonDeClic={false}
          manejarClic={reiniciarClics}
        />
      </div>
    </div>
  )
}

export default App
