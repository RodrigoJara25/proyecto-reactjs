import Item from "../Item/Item";

// en este componente recorremos el array de "products" y vamos renderizando cada
// uno individualmente
// esto lo hacemos a traves de un componente <Item/> que va a recibir los parametros de cada producto del array
function ItemList({products}) {
    return (
        <div>
            {products.map((prod) => (
                <Item key={ prod.id } prod={prod}/>
            ))}
        </div>
    )
}

export default ItemList;