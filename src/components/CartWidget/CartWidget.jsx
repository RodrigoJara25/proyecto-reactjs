import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget(){

    const {totalProductos} = useContext(CartContext);

    return (
        <div>
            <div className="cart-icon">
                <FaShoppingCart />
                { totalProductos() > 0 && 
                    <div className="icon-cantidad">{totalProductos()}</div>
                }
            </div>
        </div>
    )
}

export default CartWidget;