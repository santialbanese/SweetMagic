import "./carrito.css"
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";


const Carrito = () =>{
    const {cartQuantity}= useContext(CartContext)
    return (
        <div className="classCarrito">
            <span className="linkCarrito">🛒</span>
            {cartQuantity() > 0 && <p className=" numero" >{cartQuantity()}</p>}
        </div>
    )
}

export default Carrito;