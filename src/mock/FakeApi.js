const productos = [{
    id: '1',
    tipo: "Arlequin",
    opciones: "Dulce de Leche",
    precio: '3800',
    stock: "6",
    categoria: "Nuevos",
    imagen: '../multimedia2/arlequinDLL.jpg',
    descripcion: "Chocolate con leche y blanco relleno con dulce de leche."

  },
  {
    id: '2',
    tipo: "Arlequin",
    opciones: "Rocher",
    precio: '3900',
    stock: "17",
    categoria: "Mas vendidos",
    imagen: "../multimedia2/arlequinrocher.jpg",
    descripcion: "Chocolate con leche y semiamargo relleno con crema de avellanas y cacao."
  },
  {
    id: "3",
    tipo: "Arlequin",
    opciones: "Rojo",
    precio: '3700',
    stock: "9",
    categoria: "Ofertas",
    imagen: "../multimedia2/arlequinrojo.jpg",
    descripcion: "Chocolate con leche relleno de dulce de leche."
  },
  {
    id: "4",
    tipo: "Arlequin",
    opciones: "Violeta",
    precio: '3700',
    stock: "8",
    categoria: "Nuevos",
    imagen: "../multimedia2/arlequinvioleta.jpg",
    descripcion: "Chocolate blanco relleno de crema oreo."
  }]

export const getProducts = () =>{
    let error = false
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(error){
                reject('intente mas tarde')
            }else{
                    resolve(productos)
                
            }
        }, 1000)
    })
}


export const getOneProduct = (id) =>{
  let error = false
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
    if(error){
    reject('Hubo un problema')
    }else{
      let product = productos.find((item)=> item.id === id)
      resolve (product)
    }
    }, 1000)
  })
}