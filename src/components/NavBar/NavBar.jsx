import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar(){

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/"><img src="https://cdn-icons-png.freepik.com/512/1031/1031497.png" alt="" /></Link>
            </div>
            <div>
                <ul className="ulnavbar">
                    <li className="linavbar"><Link to="/category/selección">Selecciones</Link></li>
                    <li className="linavbar"><Link to="/category/club">Clubes</Link></li>
                    <li className="linavbar"><Link to="/category/clubL1">Liga Local</Link></li>
                </ul>
            </div>
            <div className="carrito">
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;