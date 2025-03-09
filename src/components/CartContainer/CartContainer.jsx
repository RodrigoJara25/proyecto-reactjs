import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css"; // Importa los estilos
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartContainer() {
    const { cartList, totalProductos, deleteItem, removeList } = useContext(CartContext);

    // Calcular el total de la compra
    const total = cartList.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className="cart-container">
            <h1>Carrito de Compras</h1>
            {cartList.length === 0 ? (
                <div>
                    <p>No hay productos en el carrito</p>
                    <Link to="/" style={{textDecoration: "none"}}>
                        <button className="delete-btn">Volver a inicio</button>
                    </Link>
                </div>
            ) : (
                <>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartList.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <img className="cart-img" src={item.imagen} alt={item.nombre} />
                                    </td>
                                    <td>{item.nombre}</td>
                                    <td>${item.precio}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${item.precio * item.cantidad}</td>
                                    <td className="tdBtnDelete">
                                        <button onClick={() => deleteItem(item)} className="delete-btn">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="cart-total">
                        <button onClick={removeList}> 
                            <p>Limpiar carrito</p>
                        </button>
                        <p>PEN: {total}</p>
                        <Link to="/checkout" className="link">
                            <button>
                                <p>Continuar ({totalProductos()})</p>
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartContainer;
