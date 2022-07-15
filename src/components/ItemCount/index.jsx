import React, { useState } from "react";
import "./itemCount.css";

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
        <div>
            <div className="hijoCantidades">
                <button disabled={count <= 1} onClick={restarProductos} className="botonMenos">-</button>
                <p className="cantidad">Cantidad: <span>{count}</span></p>
                <button disabled={count >= stock} onClick={sumarProductos} className="botonMas">+</button>
            </div>
            <div className="hijoDeLaCard">
                <button onClick={resetear} className="botonReset">Resetear cantidad</button>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className="botonAgregar">Agregar Al Carrito </button>
            </div>
        </div>
    );
}

export default ItemCount;