import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* --------   Guardo esto para cuando aprendamos a incluir JS dentro del proyecto(si es que se puede, en caso de que no, cambio los estilos para cambiar la orientacion y la posicion) (son las funciones y llamados necesarios para que funcione el menu desplegable en el nav y para que el menu responsive si funcione correctamente)   ---------------- */
/* const botonMenu = document.querySelector(`#botonMenu`);
const menu = document.querySelector(`#menuNav`);
botonMenu.addEventListener(`click`, desplegarMenu());
function desplegarMenu() {
  menu.classList.toggle(`mostrar`);
}

const botonDesplegable = document.querySelector(`.botonDesplegable`);
for(let i=0; i<botonDesplegable.length; i++) {
  botonDesplegable[i].addEventListener(`click`, menuDesplegado())
}
function menuDesplegado() {
  if(window.innerWidth < 1024){
    const subMenu = this.nextElementSibling;
    const height = subMenu.scrollheight;
    if(subMenu.classList.contains("desplegar")){
      subMenu.classList.remove("desplegar");
      subMenu.removeAttribute("style");
    }else{
      subMenu.classList.add("desplegar");
      subMenu.style.height = height + "px";
    }
  }
} */