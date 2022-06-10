import React from 'react'
import '../estilos/Contacto.css'
import wpc from '../images/wpc.png'
import ig from '../images/instagramicon.png'
import git from '../images/giticon.png'

const Contacto = () => {
  return (
    <div className='Contacto'>
        <div className='Contacto_codigo'>
            <img src={wpc} alt="" />
        </div>
        <div className="Contacto_redes">
            <a href="https://github.com/shgzjxd" target='_blank'><img src={git} alt="" /></a>
            <a href="https://www.instagram.com/jesuspaguay/" target='_blank'><img src={ig} alt="" /></a>
        </div>

    </div>
  )
}

export default Contacto