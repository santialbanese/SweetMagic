import "./cart.css"
import React, { useContext } from 'react'
import CartView from '../cartView/CartView'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom' 

  const Cart = () => {
    const {cart}= useContext(CartContext)
    return (
      <div>
        {!cart.length 
        ? <div className='claseCart'>
            <h2>Tu carrito esta vacio!</h2>
            <Link className='btn btn-success botonCart' to='/'>Ir a comprar! </Link>
        </div>
        :<CartView/>}
      </div>
    )
  }

export default Cart