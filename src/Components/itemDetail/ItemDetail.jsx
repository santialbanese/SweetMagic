import React, { useState, useContext } from 'react'
import ItemCount from '../itemCount/ItemCount';
import "./itemDetail.css"
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

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
    console.log(cantidadAgregada)

    return(
        <div className="item-detail">
            <h3>{producto.tipo}</h3>
            <h3>{producto.opciones}</h3>
            <img src={producto.imagen} alt={producto.tipo} className='clase-imagen' />
            <p>{producto.descripcion}</p>
            <p className="price">${producto.precio}</p>
            { compra ? <Link to={'/cart'}  className='btn btn-success'>Ir al carrito</Link> : <ItemCount stock={producto.stock} onAdd={onAdd} className="item-count"/>}
            <Link to={'/'}  className='btn btn-success volver'>Inicio</Link>
        </div>
    );
}
export default ItemDetail; 