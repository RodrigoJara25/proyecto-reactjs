function ItemDetail({product}) {
    console.log(product)
    return (
        <div>
            <h3>{product.nombre}</h3>
            <h4>Temporada: {product.temporada}</h4>
            <img src={product.imagen} alt={product.categoria} />
            <button>+</button>
            <p>1</p>
            <button>-</button>
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail;