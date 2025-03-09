import { useState } from "react";
import "./Checkout.css"
function Checkout() {
    
    const [user, setUser] = useState({});

    return(
        <div className="checkout-wrapper">
            <div className="checkout-container">
                <h1>Checkout</h1>
                <form className="checkout-form">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name" required/>
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" name="apellido" id="apellido" required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                    <button type="submit" className="checkout-button">Enviar</button>
                </form>
            </div>
        </div>
        
    )
}

export default Checkout;