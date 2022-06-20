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
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Floral <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Frutal <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Verde <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Aromatico <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Fougère <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Cítrico <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Chipre <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Amaderado <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Oriental <ArrowForwardIcon /></a></li>
                            <li className="itemDeMenu"><a className="linkMenu linkMenuDesp" href="./">Musk <ArrowForwardIcon /></a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="listCarrito">
                    <CartWidget />
                </ul>
            </nav>
        </>
    )
}
/* <ul className="listaDesplegable">
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Floral</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Frutal</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Verde</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Aromatico</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Fougère</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Cítrico</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Chipre</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Amaderado</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Oriental</a></li>
                            <li className="itemDeMenu"><a className="linkMenu" href="./">Musk</a></li>
                        </ul> */
export default NavBar;