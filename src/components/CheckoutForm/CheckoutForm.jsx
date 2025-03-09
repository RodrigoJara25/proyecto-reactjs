import { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

function CheckoutForm({setLoading, setEnviado}) {

    const { cartList, removeList } = useContext(CartContext);

    // Estados para los inputs
    const [name, setName] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");

    async function enviarBoleta(e) {
        e.preventDefault();
        
        // Primero, activar la pantalla de carga
        setLoading(true);
    
        // Validar que haya productos en el carrito
        if (cartList.length === 0) {
            console.error("El carrito está vacío. No se puede generar la boleta.");
            setLoading(false); // Asegurar que se vuelve a mostrar el formulario
            return;
        }
    
        try {
            const boletaRef = collection(db, "boletas");
    
            const newBoleta = {
                nombre: name,
                apellido: apellido,
                email: email,
                items: cartList,
                date: new Date(), 
            };
    
            await addDoc(boletaRef, newBoleta);
            console.log("Boleta agregada:", newBoleta);
    
        } catch (error) {
            console.error("Error al agregar la boleta:", error);
        } finally {
            // Asegurar que la pantalla vuelva a la normalidad después del envío
            setLoading(false);
            setEnviado(true);
            removeList();
        }
    }

    return (
        <div className="checkout-wrapper">
            <div className="checkout-container">
                <h1>Checkout</h1>
                <form className="checkout-form" onSubmit={enviarBoleta}>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />

                    <label htmlFor="apellido">Apellido</label>
                    <input 
                        type="text" 
                        name="apellido" 
                        id="apellido" 
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)}
                        required 
                    />

                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />

                    <button type="submit" className="checkout-button">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutForm;