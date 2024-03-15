import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar.jsx"
import {ItemListContainer} from "./Components/itemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./Components/itemDetailContainer/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/cart/Cart';
function App() {
  const saludo2 = "bienvenidos a mi app de venta de bombones."
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="hola!😀" saludo2={saludo2}/>} />
          <Route path='/categories/:categoryId' element={<ItemListContainer greeting="categoria:" />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
