import CartWidget from "../CartWidget/CartWidget";

function NavBar(){

    return (
        <nav>
            <ul>
                <li><a href="">Selecciones</a></li>
                <li><a href="">Clubes</a></li>
                <li><a href="">Liga Local</a></li>
            </ul>
            <div>
                {/* Muestra el Icono del Carrito */}
                <CartWidget/>   
            </div>
        </nav>
    )
}

export default NavBar;