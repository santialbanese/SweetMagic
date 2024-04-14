import React from 'react'
import "./itemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "../itemList/ItemList"
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

export const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()
 
    useEffect(()=>{
        setLoading(true)
        const productosCollection = categoryId ? query(collection(db, "productos"), where("categoria","==", categoryId) ) : collection(db, "productos") 
        getDocs(productosCollection)
        .then((res)=>{ 
            const list = res.docs.map((product)=>{
                return{
                    id: product.id, 
                    ...product.data()
                }
            })
            setProductos(list)
        })
        .catch((error)=> console.log(error, 'mal'))
        .finally(() => setLoading(false))
    },[categoryId])

    if(loading){
        return <div className='clase-loading'> 
        <div>
            <img src="../multimedia2/gift-cargando.webp" alt="cargando productos" className='clase-gift'/>
        </div>
    </div>
    }



    return <div className="saludos fondo">
        <h1 className='texto1'>{props.greeting}</h1>
        <h2 className='texto2'>{props.saludo2}</h2>
        {categoryId 
       ?<h1 className='fst-italic colorCategoria'>{props.texto} {categoryId}</h1>
       :<h1 className='fst-italic text-danger-emphasis'>{props.texto}</h1>}
        <ItemList productos={productos}/>
    </div>
}