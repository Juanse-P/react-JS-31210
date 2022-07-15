import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "../../Context/CartContext";


const CartWidget = ({ tamano }) => {
    const { totalProducts } = useCartContext();



    return (
        <>
            <ShoppingCartIcon sx={{ fontSize: tamano }} />
            <span >{totalProducts() || ""}</span>
        </>
    )
}

export default CartWidget;