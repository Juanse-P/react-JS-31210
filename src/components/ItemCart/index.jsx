import React from "react";
import { useCartContext } from "../../Context/CartContext";
import "./itemCart.css";
import ClearIcon from '@mui/icons-material/Clear';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className="cartItemBox">
            <div className="boxCartItem centradoIma">
                <img className="imaCarUni" src={product.image} alt={product.fastDescription} />
            </div>
            <div className="boxCartItem leftMarg">
                <h2>{product.brand}</h2>
                <h3>{product.title}</h3>
                <h4>{product.fastDescription}</h4>
            </div>
            <hr />
            <div className="boxCartItem leftMarg">
                <h5>precio unitario: $ {product.price} cop</h5>
                <h5>Cantidad: {product.quantity}</h5>
                <h5>subtotal: $ {product.quantity * product.price} cop</h5>
            </div>
            <div className="boxCartItem leftMarg">
                <button className="botonQuitItem" onClick={() => removeProduct(product.id)}>Elinimar producto <ClearIcon /></button>
            </div>
        </div>
    )
}

export default ItemCart