import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
import { useState } from "react";


// Funcion para iniciar sesion con Google
function Auth({onAuthSuccess}){

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log(user);
            // Aqui puedes redirigir al usuario o actualizar el estado de tu aplicacion
            onAuthSuccess(user)
        } catch (error) {
            console.error(error);
            
        }
    };
    return (
        <div>
            <button onClick={signInWithGoogle}>Iniciar sesión con Google</button>
        </div>
    );
}

export default Auth;