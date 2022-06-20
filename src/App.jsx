import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <ItemListContainer bienvenida="Hola! Bienvenido a la pagina de Perfu - Mate"/>
    </>
  )
}

export default App