import './App.css';
import NavBar from './componentes/NavBar';


function App() {


  const tocar = evento =>{
    if(evento.target.className!=="BarraLateral"&&evento.target.id!=="botonMostrar"&&evento.target.className!=="BarraNavegacion_boton"){
      let cerrarMenu = document.getElementById('BarraL');
      cerrarMenu.style='transform: translateX(-110%)';
    }
  }


  return (
    <div className="App" onClick={tocar}>
      <NavBar />
      
    </div>
  );
}

export default App;
