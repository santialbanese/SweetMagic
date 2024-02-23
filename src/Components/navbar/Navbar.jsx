import "./navbar.css"
import Carrito from "../carrito/Carrito.jsx"
import logo from "../../multimedia/logo2png.png"
const Navbar = () =>{
    return (
        <nav className="navContainer">
            <a className="link" href="/"> 
                <img alt="logo" src={logo} className="logo"/> 
            </a>
            <div className="secciones">
              <a className="link" href="/">Nuevos</a>
              <a className="link" href="/">Mas vendidos</a>
              <a className="link" href="/">Ofertas</a>
            </div>
            <Carrito></Carrito>
        </nav>
    )
}

export default Navbar;