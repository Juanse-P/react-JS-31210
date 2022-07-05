import React from "react";
import "./NavBar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom"

const NavBar = () => {
    const categorys = [{ name: "Frutal", id: "1001", route: "/categoria/Frutal" }, { name: "Aromática", id: "1002", route: "/categoria/Aromática" }, { name: "Chipre", id: "1003", route: "/categoria/Chipre" }, { name: "Fougère", id: "1004", route: "/categoria/Fougère" }, { name: "Gourmand", id: "1005", route: "/categoria/Gourmand" }, { name: "Floral", id: "1006", route: "/categoria/Floral" }, { name: "Oriental", id: "1007", route: "/categoria/Oriental" }, { name: "Amaderada", id: "1008", route: "/categoria/Amaderada" }, { name: "Especiada", id: "1009", route: "/categoria/Especiada" }, { name: "Acuática", id: "1010", route: "/categoria/Acuática" }, { name: "Fresca", id: "1011", route: "/categoria/Fresca" }, { name: "Cítrica", id: "1012", route: "/categoria/Cítrica" }];
    return (
        <>
            <header>
                <nav className="miNavegador">
                    <div>
                        <NavLink className="linkMenu" to="/"><p className="linkMenu letraDif">Perfu - Mate</p></NavLink>
                    </div>
                    <ul>
                        <hr />
                    </ul>
                    <ul className="menuNav">
                        <li className="mostrarSubmenu itemDeMenu linkMenu">
                            <p className="linkMenu" href="./">Categorias (filtro)<ArrowDropDownIcon /></p>
                            <ul className="listaDesplegable">
                                {categorys.map((category) => <li key={category.id} className="itemDeMenu"><NavLink className="linkMenu linkMenuDesp" to={category.route}>{category.name} <ArrowForwardIcon /></NavLink></li>)}
                            </ul>
                        </li>
                    </ul>
                    <ul className="listCarrito">
                        <li className="itemDeMenu linkMenu">{/* <button className="botonCarrito"> */}<NavLink className="linkMenu botonCarrito" to="/cart"><CartWidget tamano={65} /></NavLink>{/* </button> */}</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default NavBar;