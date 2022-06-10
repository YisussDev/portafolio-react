import '../estilos/Cartas.css'

export default function Cartas(props) {
  return (
    
    <div className="Cartas">
        <a href={props.url} rel="noreferrer">
          <div className="Cartas_imagen">
            <img src={props.imagen} alt="" />
          </div>
        </a>
        <h2>{props.nombre}</h2>
        <h3>Habilidades:</h3>
        <div className="Cartas_habilidades">
                    <img src={props.h1} alt="h1" />
                    <img src={props.h2} alt="h2" />
                    <img src={props.h3} alt="h3" />
                    <img src={props.h4} alt="h4" />
        </div>
        
    </div>
    
  );
}
