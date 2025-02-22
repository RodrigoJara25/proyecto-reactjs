import './ItemDetail.css' 

function ItemDetail({product}) {
    console.log(product)
    return (
        <div className='divItemDetail'>
            <h3>{product.nombre}</h3>
            <h4>Temporada: {product.temporada}</h4>
            <img src={product.imagen} alt={product.categoria} />
            <div className='cantidadProducto'>
                <button>+</button>
                <p>1</p>
                <button>-</button>
            </div>
            <button className='btnAgregarCarrito'>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail;