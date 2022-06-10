import React from 'react'
import '../estilos/Cartas.css'
import Cartas from './Cartas'
import { v4 as uuidv4 } from 'uuid';
import ri from '../images/reacticon.png'
import js from '../images/jsicon.png'
import css from '../images/cssicon.png'
import html from '../images/htmlicon.png'
import cr from '../images/consejosrandom.png'
import tarea from '../images/tarea.png'
import sol from '../images/solucion.png'
import nn from '../images/null.png'

const Codigos = () => {
    const info  = [
        {
           nombre: 'Consejos random',
           imagen: cr,
               h1: ri,
               h2: js,
               h3: css,
               h4: html,
               id: uuidv4(),
               url: "https://precious-mermaid-5685a1.netlify.app/"
            },
            {
                nombre: 'Lista de Tareas',
                imagen: tarea,
                    h1: ri,
                    h2: js,
                    h3: css,
                    h4: html,
                    id: uuidv4(),
                    url: "https://fastidious-sunflower-a3bb93.netlify.app/"
                 },
                 {
                    nombre: 'Reto Frontend',
                    imagen: sol,
                        h1: nn,
                        h2: js,
                        h3: css,
                        h4: html,
                        id: uuidv4(),
                        url: "https://lighthearted-torte-b301f4.netlify.app/"
                     }
        
                    ]
  return (
    <div className='Contenedor'>
        {
            info.map(data => <Cartas 
                key={data.id}
                nombre={data.nombre}
                imagen={data.imagen}
                h1={data.h1}
                h2={data.h2}
                h3={data.h3}
                h4={data.h4}
                id={data.id}
                url={data.url}
                />
                )
        }
    </div>
  )
}

export default Codigos