import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css' 

function ItemDetail({product}) {

    const [cantidad, setCantidad] = useState(0);
    const { addToCart } = useContext(CartContext);

    const [agregado, setAgregado] = useState(false);

    const sumarCantidad = () => {
        setCantidad(prev => prev + 1)
    }
    const restarCantidad = () => {
        if (cantidad > 0) {
            setCantidad(prev => prev - 1)
        }
    }
    const agregarAlCarrito = () => {
        if (cantidad > 0) {
            // del CartContext
            addToCart(product, cantidad);
            setAgregado(true);
        }
    }

    if (agregado == true) {
        return (
            <div className='divItemDetail'>
                <p className='pAgregado'>Producto agregado</p>
                <Link to='/cart' style={{textDecoration:'none'}}>
                    <button className='btnIrCarrito'>Ir al carrito</button>
                </Link>
            </div>
        )
    }

    return (
        <div className='divItemDetail'>
            <h3>{product.nombre}</h3>
            <h4>Temporada: {product.temporada}</h4>
            <img src={product.imagen} alt={product.categoria} />
            <p className='pPrecio'>Precio: {product.precio}</p>
            <div className='cantidadProducto'>
                <button onClick={sumarCantidad}>+</button>
                <p>{cantidad}</p>
                <button onClick={restarCantidad}>-</button>
            </div>
            <button className='btnAgregarCarrito' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail;