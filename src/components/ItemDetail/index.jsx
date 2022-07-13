import React, { useState } from "react";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import CarouselDetailItem from "../CarouselDetailItem";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const ItemDetail = ({ data }) => {
    const [goCart, setGocart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGocart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="bigItemDetail">
            <div className="hijoDelDetail imageDet">
                <CarouselDetailItem key={data.id} image1={data.image} image2={data.image2} image3={data.image3} description={data.fastDescription} />
            </div>
            <div className="hijoDelDetail headDet">
                <h1>{data.brand}</h1>
                <h2>{data.title}</h2>
                <h3>{data.fastDescription}</h3>
                <h3>Precio: $ {data.price} cop</h3>
                {
                    goCart ? <Link className="linkTerminar" to='/cart'>Terminar Compra</Link> : <ItemCount stock={data.stock} initial={1} onAdd={onAdd} />
                }
            </div>
            <div className="hijoDelDetail hrPrDet">
                <hr />
            </div>
            <div className="hijoDelDetail descriDet">
                <h1>Descripción</h1>
                <p>{data.description}</p>
            </div>
            <div className="hijoDelDetail hrSecDet">
                <hr />
            </div>
            <div className="hijoDelDetail recomeDet">
                <h1>Recomendaciones</h1>
                <p>{data.recomendations}</p>
            </div>
        </div>
    )
}

export default ItemDetail;