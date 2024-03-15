import { Link } from 'react-router-dom'
import "./item.css"

const Item = ({producto}) =>{
    return(
        <div className="card" style={{width: '18rem' }}>
            <img src={producto.imagen} className="card-img-top" alt={producto.tipo}/>
            <div className="card-body">
                <h5 className="card-title">{producto.opciones}</h5>
                <p className="card-text">${producto.precio}</p>
                <Link to={`/item/${producto.id}`} className="btn btn-primary">Ver mas</Link>
            </div>
        </div>)}
export default Item