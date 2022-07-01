import React from "react";
import "./NavBar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <>
            <nav className="miNavegador">
                <div>
                    <a className="linkMenu" href="./"><p className="linkMenu letraDif">Perfu - Mate</p></a>
                </div>
                <ul>
                    <li className="itemDeMenu linkMenu"><a href="./" className="linkMenu">Sobre Nosotros</a></li>
                    <li className="itemDeMenu linkMenu"><a href="./" className="linkMenu">Contactanos</a></li>
                </ul>
                <ul className="menuNav">
                    <li className="mostrarSubmenu itemDeMenu linkMenu">
                        <p className="linkMenu" href="./">Categorias (filtro)<ArrowDropDownIcon /></p>
                        <ul className="listaDesplegable">
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Frutal <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Aromática <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Chipre <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Fougère <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Gourmand <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Floral <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Oriental <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Amaderada <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Especiada <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Acuática <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Fresca <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Cítrica <ArrowForwardIcon /></a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="listCarrito">
                    <li className="itemDeMenu linkMenu"><button className="botonCarrito"><CartWidget tamano={55} /></button></li>
                </ul>
            </nav>
        </>
    )
}
export default NavBar;