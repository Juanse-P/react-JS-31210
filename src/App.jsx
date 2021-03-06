import "./App.css";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import FormContainer from "./components/FormContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartProvider from "./Context/CartContext";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer bienvenida="Hola! Bienvenido a la pagina de Perfu - Mate" />} />
            <Route path="/categoria/:categoriaId" element={<ItemListContainer bienvenida="Hola! Bienvenido a la pagina de Perfu - Mate" />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/formDatos" element={<FormContainer />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App