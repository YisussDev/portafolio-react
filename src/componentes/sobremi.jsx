import '../estilos/sobremi.css'
import perfil from '../images/perfil.png'
import ri from '../images/reacticon.png'
import js from '../images/jsicon.png'
import css from '../images/cssicon.png'
import html from '../images/htmlicon.png'
import cd from '../images/cd.svg'

export default function SobreMi (){



return(
    <div className='SobreMi'>
        <h1>Jesús Paguay</h1>
        <div id='sobremi_imagen'>
            <img src={perfil} alt="fotoperfil" />
        </div>
        <div id='sobremi_cargo'>
            <h2>Estudiante de Ingeniería Electrónica</h2>
        </div>
        <h2>Habilidades:</h2>
        <div id='sobremi_habilidades'>
            <img src={ri} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={html} alt="" />
            <img src={cd} alt="" />
        </div>
        <div id='sobremi_estudios'>
            <p>¡Hola! Mi nombre es Jesús Paguay Naranjo, actualmente
                soy estudiante de Ingeniería Electrónica en la 
                Universidad Popular del Cesar, soy Colombiano, tengo
                23 años, me gusta aprender en la red, descubrí esta
                pasión por la programación web hace unos meses y me 
                gustaría seguir aprendiendo mucho más.
            </p>
        </div>
    
    </div>
    
)

}