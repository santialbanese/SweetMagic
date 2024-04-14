import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando]= useState(false)
    const [validateItem, setValidateItem] = useState(false)
    const {itemId} = useParams()

    useEffect(()=>{
        setCargando(true)
        const collectionProd = collection(db, "productos")
        const referenciaDoc = doc(collectionProd, itemId)
        getDoc(referenciaDoc)
        .then((res)=> {
            if(res.data()){
                setProducto({id: res.id, ...res.data()})
              }else{
                setValidateItem(true)
              }
        }) 
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[itemId])
 
    if(cargando){
        return <div className='clase-loading'> 
        <div>
            <img src="../multimedia2/gift-cargando.webp" alt="cargando productos" className='clase-gift'/>
        </div>
    </div>
    }
    else{
        return(
            <div>
                  {validateItem ? <p>El producto no existe</p> : <ItemDetail producto={producto}/>} 
            </div>

        )
    }


}
export default ItemDetailContainer