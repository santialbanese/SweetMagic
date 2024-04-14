import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './cartView.css'; // Importa tus estilos CSS aquí

const CartView = () => {
  const { cart, removeItem, cartPriceTotal, clear } = useContext(CartContext);

  return (
    <div className="cartContainer">
      <div>
        {cart.map((compra) => (
          <div className="cartItem" key={compra.id}>
            <img className="cartItemImg" src={compra.imagen} alt={compra.tipo} />
            <div className="cartItemInfo">
              <span>{compra.tipo}: {compra.opciones}</span>
              <span>Cantidad(Kg): {compra.quantity}</span>
              <span>Precio(Kg): ${compra.precio},00</span>
              <span>Precio final: ${compra.precio * compra.quantity},00</span>
            </div>
            <div className="cartItemActions">
              <button className="cartButton btn btn-danger" onClick={() => removeItem(compra.id)}>X</button>
            </div>
          </div>
        ))}
      </div>
      <p className="total">TOTAL A PAGAR: ${cartPriceTotal()},00</p>
      <div>
        <button className="cartButton btn btn-danger" onClick={clear}>Vaciar carrito</button>
        <Link className="cartButton btn btn-success" to="/checkout">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default CartView;
