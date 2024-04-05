import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cartView.css'

const CartView = () => {
    const {cart, removeItem, cartPriceTotal, clear}= useContext(CartContext)
  return (
    <div>
        <div>
            {cart.map((compra)=>{
                return(
                    <div className='cartViewClase' key={compra.id}>
                       <img src={compra.imagen} alt={compra.tipo} style={{width:'8rem'}}/> 
                       <span>{compra.tipo} {compra.opciones}</span>
                       <span>Cantidad(Kg): {compra.quantity}</span>
                       <span>Precio(Kg): ${compra.precio},00</span>
                       <span>Precio final: ${compra.precio * compra.quantity},00</span>
                       <button className='btn btn-danger' onClick={()=>removeItem(compra.id)}>X</button>
                    </div>
                )
            })}
        </div>
        <p className='total'>Total a pagar:${cartPriceTotal()},00 </p>
        <button className='vaciar btn btn-danger' onClick={clear}>Vaciar carrito</button>
    </div>
  )
}

export default CartView  