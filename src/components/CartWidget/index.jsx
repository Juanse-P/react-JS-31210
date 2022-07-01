import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const CartWidget = ({tamano}) => {
    return (
        <ShoppingCartIcon sx={{ fontSize: tamano }} />
    )
}

export default CartWidget;