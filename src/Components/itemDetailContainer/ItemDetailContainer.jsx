import { useState, useEffect } from "react"
import { getOneProduct } from "../../mock/FakeApi"
import ItemDetail from "../itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const [cargando, setCargando]= useState(false)
    const {itemId} = useParams()

    /* useEffect(()=>{
        setCargando(true)
        getOneProduct(itemId)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[])
    */

    useEffect(()=>{
        setCargando(true)
        const collectionProd = collection(db, "productos")
        const referenciaDoc = doc(collectionProd, itemId)
        getDoc(referenciaDoc)
        .then((res)=> setProducto({id:res.id, ...res.data()}))
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
            <ItemDetail producto={producto}/>
        )
    }


}
export default ItemDetailContainer