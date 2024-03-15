import ItemCount from '../itemCount/ItemCount';
import "./itemDetail.css"

const ItemDetail = ({producto}) =>{
    return(
        <div className="item-detail">
            <h3>{producto.tipo} {producto.opciones}</h3>
            <img src={producto.imagen} alt={producto.tipo} className='clase-imagen' />
            <p>{producto.descripcion}</p>
            <p className="price">${producto.precio}</p>
            <ItemCount stock={producto.stock} className="item-count" />
        </div>
    );
}

export default ItemDetail;
