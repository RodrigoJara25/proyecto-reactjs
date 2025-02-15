import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'

function CartWidget(){
    return (
        <div style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
            <FaShoppingCart />
            
        </div>
    )
}

export default CartWidget;