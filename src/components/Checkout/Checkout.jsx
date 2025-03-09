import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Checkout.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function Checkout() {

    const [loading, setLoading] = useState(false);
    const [enviado, setEnviado] = useState(false);

    if (enviado) {
        return (
            <div className="checkout-div">
                <h2>¡Gracias por tu compra!</h2>
                <Link to='/'>
                    <button>Volver al inicio</button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {!loading ? <CheckoutForm setLoading={setLoading} setEnviado={setEnviado}/> : <h2 className="generando-boleta">Generando pedido...</h2>}
        </div>
    )
}

export default Checkout;
