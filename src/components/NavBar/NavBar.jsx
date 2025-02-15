import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

function NavBar(){

    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg" alt="" />
            </div>
            <div>
                <ul className="ulnavbar">
                    <li className="linavbar"><a href="">Selecciones</a></li>
                    <li><a href="">Clubes</a></li>
                    <li><a href="">Liga Local</a></li>
                </ul>
            </div>
            <div className="carrito">
                {/* Muestra el Icono del Carrito */}
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;