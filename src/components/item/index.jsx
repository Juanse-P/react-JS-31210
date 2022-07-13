import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
    return (
        <>
            <div className="proxCardItem">
                <div className="hijoDeLaCard">
                    <img src={info.image} alt={info.title} className="imaCard" />
                </div>
                <div className="hijoDesc hijoDeLaCard">
                    <h1>{info.brand}</h1>
                    <h3>{info.title}</h3>
                    <p>{info.fastDescription}</p>
                </div>
                <div className="hijoDeLaCard">
                    <h3>Precio: $ {info.price} cop</h3>
                    <Link to={`/detalle/${info.id}`}><p>Ver mas sobre el producto...</p></Link>
                </div>
            </div>
        </>
    );
}

export default Item;