import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css"; // Importa los estilos
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../config/Auth";

function CartContainer() {
    const { cartList, totalProductos, deleteItem, removeList } = useContext(CartContext);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Calcular el total de la compra
    const total = cartList.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    // Funcion para la autenticacion
    const handleAuthSuccess = (user) => {
        setIsAuthenticated(true);
    };

    const handlePayment = () => {
        if (!isAuthenticated) {
            alert("Por favor, inicia sesión con Google para continuar.");
            return;
        }
        navigate('/checkout');
    };

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
                        <button onClick={handlePayment}>
                            <p>Continuar ({totalProductos()})</p>
                        </button>
                    </div>
                </>
            )}
            {!isAuthenticated && <Auth onAuthSuccess={handleAuthSuccess}/> }
        </div>
    );
}

export default CartContainer;
