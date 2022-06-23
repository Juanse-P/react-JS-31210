import React from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";

const ItemListContainer = ({ bienvenida }) => {
    const onAdd = (cantidad) => {
        console.log(`añadiste ${cantidad} unidades al carrito`);
    }
    return (
        <>
            <Title greeting={bienvenida} />
            <ItemCount initial={1} stock={7} onAdd={onAdd} />
        </>
    )
}

export default ItemListContainer;