import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock, onAdd}) =>{
    const [count, setCount]= useState(1)

    

    const sumar = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 0){

            setCount(count -1)
        }
    }
    /* const verificar = () => {
        if(count != 0){

        }
    } */

    return(
        <>
        <div className="d-flex justify-content-center">
        <button className="btn btn-danger" onClick={restar}>-</button>
            <span  className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>
        </div>
        <button className="btn btn-primary" disabled={stock === 0 || count === 0} onClick={()=>onAdd(count)}>Comprar</button>
        </>
    )
}
export default ItemCount 