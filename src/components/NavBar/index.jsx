import React from "react";
import Logo from "../../assets/logo-ecomerce.png";
//import CarroImg from "../../assets/carritoCompras.png";
import "./NavBar.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';

const NavBar = () => {
    return (
        <>
            <span className="nav-bar" id="botonMenu"><MenuIcon />Menú</span>
            <nav className="naviBar">
                <ul className="menu" id="menuNav">
                    <li ><a className="linkIniNav" href="./"><p className="letraNavCur">Perfu - Mate</p></a></li>
                    <li className="itemDeMenu"><a className="linkMenu" href="./">Inicio<CallMissedOutgoingIcon fontSize="small" /></a></li>
                    <li className="itemDeMenu"><a className="linkMenu" href="./">Sobre Nosotros<CallMissedOutgoingIcon fontSize="small" /></a></li>
                    <li className="itemDeMenu conteSubMenu"><div className="linkMenu botonDesplegable" href="">Categorias (filtro)<ArrowDropDownIcon sx={{ fontSize: 40 }} /></div>
                        <ul className="listaDesplegable">
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
                        </ul>
                    </li>
                </ul>
                <div className="carrito"><ShoppingCartIcon sx={{ fontSize: 100 }} /></div>
            </nav>
        </>
    )
}

export default NavBar;