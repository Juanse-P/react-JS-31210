import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer bienvenida="Hola! Bienvenido a la pagina de Perfu - Mate" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer bienvenida="Hola! Bienvenido a la pagina de Perfu - Mate" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
        </Routes>
        {/* <ItemListContainer bienvenida="Hola! Bienvenido a la pagina de Perfu - Mate" /> */}
        {/* <ItemDetailContainer /> */}
        {/* <Cart/> */}
      </BrowserRouter>
    </>
  )
}

export default App