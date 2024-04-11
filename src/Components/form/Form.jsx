import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [feedback, setFeedBack] = useState('')
    const [ValidateEmail, setValidateEmail] = useState('')


    const enviarDatos = (e) =>{
        e.preventDefault()
        if(email !== ValidateEmail){
            alert('los mails son distintos, ponga el mismo mail en ambos')
        }else{
            if(name === '' || email === '' || telephone === ''){
                alert('Complete el formulario')
                setFeedBack('')
            }else{
    
                console.log(
                    {
                        nombreCompleto:name,
                        correo:email,
                        telefono:telephone
                    }
                    )
                    setFeedBack('Muchas gracias, nos comunicaremos con uds en breve')
            }
        }
        
    }


    if(feedback!== ''){
        return <p>{feedback}</p>
    }

  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
        <h1>Form</h1>

        <form className='d-flex justify-content-center flex-column align-items-center' onSubmit={enviarDatos}>
            <input type='text' placeholder='Nombre Completo' onChange={(e)=>setName(e.target.value)}/>
            <input type='email' placeholder='ejemplo@ejemplo.com' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='number' placeholder='02254-566411' onChange={(e)=>setTelephone(e.target.value)}/>
            <input type='email' placeholder='repita su correo' onChange={(e)=>setValidateEmail(e.target.value)}/>
            <button type='submit'>Enviar</button>
        </form>

        <p>{name}</p>
        <p>{email}</p>
        <p>{telephone}</p>
    </div>
  )
}

export default Form