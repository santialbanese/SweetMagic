import "./itemList.css"
import Item from "../item/Item"
const ItemList = ({productos}) =>{
    return(
        <div className="clase-cards">
            {productos.map((producto)=> <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}
export default ItemList