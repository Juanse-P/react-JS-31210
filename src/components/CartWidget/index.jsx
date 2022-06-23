import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = () => {
    return (
        <li className="itemDeMenu linkMenu"><button className="botonCarrito"><ShoppingCartIcon sx={{ fontSize: 60 }} /></button></li>
    )
}

export default CartWidget;