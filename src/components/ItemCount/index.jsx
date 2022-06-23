import React, { useState } from "react";
import "./itemCount.css";
import ImagenCard from "../../assets/ckfoto.webp";

const ItemCount = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(initial);
    const restarProductos = () => {
        setCount(count - 1);
    }

    const sumarProductos = () => {
        setCount(count + 1);
    }
    const resetear = () => {
        setCount(initial);
    }
    return (
        <div className="proxCardItem">
            <div className="hijoDeLaCard">
                <img src={ImagenCard} alt="Perfume CK IN2U" width="250px" />
            </div>
            <div className="hijoDesc hijoDeLaCard">
                <h3>CK IN2U HIM</h3>
                <p>Eau de Toilette vaporizador para hombre 100 ml</p>
            </div>
            <div className="hijoDeLaCard"><h3>Precio: $66.000 cop</h3></div>
            <div className="hijoDeLaCard">
                <div className="hijoCantidades">
                    <button disabled={count <= 1} onClick={restarProductos} className="botonMenos">-</button>
                    <p className="cantidad">Cantidad: <span>{count}</span></p>
                    <button disabled={count >= stock} onClick={sumarProductos} className="botonMas">+</button>
                </div>
            </div>
            <div className="hijoDeLaCard">
                <button onClick={resetear} className="botonReset">Resetear cantidad</button>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className="botonAgregar">Agregar Al Carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;