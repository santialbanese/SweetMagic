import React, { useState, useContext } from 'react'
import ItemCount from '../itemCount/ItemCount';
import "./itemDetail.css"
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({producto}) =>{
    const [cantidadAgregada, setCantidadAgregada] = useState(0)
    const [compra, setCompra] = useState(false)
    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad)=>{
        addItem(producto, cantidad)
        console.log('compraste un item', cantidad)
        setCantidadAgregada(cantidad)
        setCompra(true)
    }

    return(
        <div className="item-detail">
            <h3>{producto.tipo} {producto.opciones}</h3>
            <img src={producto.imagen} alt={producto.tipo} className='clase-imagen' />
            <p>{producto.descripcion}</p>
            <p className="price">${producto.precio}</p>
            { compra ? <button  className='btn btn-success'>Ir al carrito</button> : <ItemCount stock={producto.stock} onAdd={onAdd} className="item-count"/>}
        </div>
    );
}
export default ItemDetail;