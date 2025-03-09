import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Checkout.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function Checkout() {

    const [loading, setLoading] = useState(false);
    const [enviado, setEnviado] = useState(false);

    if (enviado) {
        return (
            <div>
                <h2 style={{color:"white"}}>¡Gracias por tu compra!</h2>
                <Link to='/'>
                    <button>Volver al inicio</button>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {!loading ? <CheckoutForm setLoading={setLoading} setEnviado={setEnviado}/> : <h2 style={{color:"white"}}>Enviando boleta...</h2>}
        </div>
    )
}

export default Checkout;
