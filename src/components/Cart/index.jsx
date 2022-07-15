import React from "react";
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import HomeIcon from '@mui/icons-material/Home';
import "./cart.css";

const Cart = () => {

    const { cart, totalPrice, clearCart } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <div className="noCartItems">
                    <h1>Manito olvidaste meter productos al carrito :(</h1>
                    <h3>Puedes añadir productos desde la pagina de inicio</h3>
                    <Link className="linkInitial" to="/">Volver al inicio <HomeIcon />  </Link>
                </div>
            </>
        )
    }

    return (
        <div className="carritoVis">
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)
            }
            <hr />
            <button className="btnVaciarCart" onClick={clearCart}>Vaciar Carrito</button>
            <h5>El precio total es de: $ {totalPrice()} cop</h5>
        </div>
    )
}

export default Cart;