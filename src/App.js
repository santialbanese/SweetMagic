import "./App.css"
import Navbar from "./Components/Navbar/Navbar.jsx"
import {ItemListContainer} from "./Components/itemListContainer/itemListContainer.jsx"
function App() {
  const saludo2 = "bienvenidos a mi app de venta de bombones."
  return (
      <div className="fondo">
        <Navbar/>
        <ItemListContainer greeting="hola!😀" saludo2={saludo2}/>
      </div>
  );
}

export default App;
