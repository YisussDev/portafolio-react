import '../estilos/NavBar.css'
import '../estilos/BarraLateral.css'
import '../estilos/BarraPc.css'
import logo from '../images/logo.png'
import boton from '../images/boton.png'
import '../estilos/BarraPc.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Inicio from './Inicio';
import Contacto from './Contacto';
import Codigos from './Codigos';
import SobreMi from './sobremi';

const NavBar = () => {

  const mostrarMenu = () =>{
    let mostrarM = document.getElementById('BarraL');
    mostrarM.style='transform: translateX(0%)';
}

  return (
    <>
    <Router>
      <div className='BarraLateral' id='BarraL'>
        <ul>
            <Link to='/'><li>Inicio</li></Link>
            <Link to='/contacto'><li>Contacto</li></Link>
            <Link to='/codigos'><li>Codigos</li></Link>
            <Link to='/sobremi'><li>Sobre mí</li></Link>
        </ul>

    </div>
    <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path='/codigos' element={<Codigos />} />
          <Route path="/sobremi" element={<SobreMi />} />
        </Routes>
    <div className="BarraNavegacion">
        <div className="BarraNavegacion_icono">
        </div>
        <div className='Contenedor_botones'>
          <ul>
            <Link to='/'><li>Inicio</li></Link>
            <Link to='/contacto'><li>Contacto</li></Link>
            <Link to='/codigos'><li>Codigos</li></Link>
            <Link to='/sobremi'><li>Sobre mí</li></Link>
          </ul>
        </div>

        <div className="BarraNavegacion_boton" onClick={mostrarMenu}>
          <img src={boton} alt="" id='botonMostrar' />
        </div>
    </div>
    </Router>
    </>
  )
}

export default NavBar