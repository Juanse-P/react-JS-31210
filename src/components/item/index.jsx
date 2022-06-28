import React, { useState } from "react";
import "./item.css";

const Item = ({ info, onAdd, initial, stock }) => {
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
        <>
            <div className="proxCardItem">
                <div className="hijoDeLaCard">
                    <img src={info.image} alt={info.title} className="imaCard" />
                </div>
                <div className="hijoDesc hijoDeLaCard">
                    <h2>{info.brand}</h2>
                    <h3>{info.title}</h3>
                    <p>{info.fastDescription}</p>
                </div>
                <div className="hijoDeLaCard">
                    <h3>Precio: ${info.price} cop</h3>
                    <a href="./"><p>Ver mas sobre el producto...</p></a>
                </div>
                <div className="hijoDeLaCard">
                    <div className="hijoCantidades">
                        <button disabled={count <= 1} onClick={restarProductos} className="botonMenos"> - </button>
                        <p className="cantidad">Cantidad: <span>{count}</span></p>
                        <button disabled={count >= stock} onClick={sumarProductos} className="botonMas"> + </button>
                    </div>
                </div>
                <div className="hijoDeLaCard">
                    <button onClick={resetear} className="botonReset">Resetear cantidad</button>
                    <button disabled={stock <= 0} onClick={() => onAdd(count, info.title, info.fastDescription)} className="botonAgregar">Agregar Al Carrito</button>
                </div>
            </div>
        </>
    );
}

export default Item;