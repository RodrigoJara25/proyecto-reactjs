import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'

function NavBar(){

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/"><img src="https://cdn-icons-png.freepik.com/512/1031/1031497.png" alt="" /></a>
            </div>
            <div>
                <ul className="ulnavbar">
                    <li className="linavbar"><a href="/category/selección">Selecciones</a></li>
                    <li><a href="/category/club">Clubes</a></li>
                    <li><a href="/category/clubL1">Liga Local</a></li>
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