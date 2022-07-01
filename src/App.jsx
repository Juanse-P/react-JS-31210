import React from "react";
/* import ItemListContainer from "./components/ItemListContainer"; */
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      {/* <ItemListContainer bienvenida="Hola! Bienvenido a la pagina de Perfu - Mate" /> */}
      <ItemDetailContainer />
    </>
  )
}

export default App