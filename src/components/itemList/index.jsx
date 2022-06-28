import React from "react";
import Item from "../item";
import "./itemList.css";


const ItemList = ({ data = [], onAdd, initial }) => {
    return (
        <div className="containerList">
            {data.map(perfume => <Item key={perfume.id} info={perfume} onAdd={onAdd} initial={initial} stock={perfume.stock} />)}
        </div>
    );
}

export default ItemList