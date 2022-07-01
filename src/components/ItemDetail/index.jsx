import React from "react";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import CarouselDetailItem from "../CarouselDetailItem";

const ItemDetail = ({ data, onAdd, initial }) => {
    return (
        <div className="bigItemDetail">
            <div className="hijoDelDetail imageDet">
                <CarouselDetailItem key={data.id} image1={data.image} image2={data.image2} image3={data.image3} description={data.fastDescription}/>
            </div>
            <div className="hijoDelDetail headDet">
                <h1>{data.brand}</h1>
                <h2>{data.title}</h2>
                <h3>{data.fastDescription}</h3>
                <h3>Precio: $ {data.price} cop</h3>
                <ItemCount stock={data.stock} title={data.title} fastDescription={data.fastDescription} initial={initial} onAdd={onAdd} />
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