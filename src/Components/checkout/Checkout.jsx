import React, { useContext, useState  } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from 'react-router-dom'
import "./checkout.css"; 
const Checkout = () => {
    const [ValidateEmail, setValidateEmail] = useState('')
    const [user, setUser] = useState({})
    const [orderId, setOrderId] = useState('')
    const { cart, cartPriceTotal, clear } = useContext(CartContext)
    const userData = (e)=>{
        setUser(
            {
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }

    const enviarDatos = (e) =>{
        e.preventDefault()
        if(user.email !== ValidateEmail){
            alert('los mails son distintos, ponga el mismo mail en ambos')
        }else{
            if(user.name === '' || user.email === '' || user.telephone === ''){
                alert('Complete el formulario')
            }else{
                let order = {
                    user,
                    items: cart,
                    total: cartPriceTotal(),
                    date: serverTimestamp()
                }
                const ventas = collection(db, 'orders')
                addDoc(ventas, order)
                .then((res)=> {
                    cart.forEach((item)=>{
                        const docRef = doc(db, 'productos', item.id)
                        getDoc(docRef)
                        .then((dbDoc)=>{
                            updateDoc(docRef, {stock: dbDoc.data().stock - item.quantity})
                        })
                    })
                    setOrderId(res.id)
                    clear()
                    
                })
            }
        }  
    }

    return(
        <div>
            {orderId !== '' ?
            <div className="mensajeConfirmacion">
                <h4 className="mensajeConfirmacionTitulo">Generaste tu orden!</h4>
                <h5>El id es: {orderId}</h5>
                <Link to ='/' className="mensajeConfirmacionEnlace">Volver a Home</Link>
            </div>
            :
            <div className="formularioCheckout">
                <h4>Completa con tus datos</h4>
                <form className='d-flex flex-column align-items-center' onSubmit={enviarDatos}>
                    <input className="inputCheckout" name='name' placeholder='Ingrese su nombre' type='text' onChange={userData}/>
                    <input className="inputCheckout" name='lastname' placeholder='Ingrese su apellido' type='text' onChange={userData} />
                    <input className="inputCheckout" name='phone' placeholder='Ingrese su telefono' type='tel' onChange={userData}/>
                    <input className="inputCheckout" name='email' placeholder='Ingrese su correo' type='email' onChange={userData}/>
                    <input className="inputCheckout" name='second-email' placeholder='Repita su correo'type='email' onChange={(e)=> setValidateEmail(e.target.value)}/>
                    <button className="botonCheckout"  type='submit'>Enviar</button>
                </form>
            </div>}
        </div>
    )
}
export default Checkout