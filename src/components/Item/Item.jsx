import { Link } from "react-router-dom";

// Este componente es el que se encarga de mostrar toda la informacion
// de cada producto
function Item({prod}) {
    return (
        <div>
            <img src={prod.imagen} alt={prod.categoria} />
            <div>
                <h3>{prod.nombre}</h3>
                <h4>{prod.temporada}</h4>
                <h4>{prod.liga}</h4>
            </div>
            <Link to={`/item/${prod.id}`} >
                Ver Detalles
            </Link>
        </div>
    )
}

export default Item;