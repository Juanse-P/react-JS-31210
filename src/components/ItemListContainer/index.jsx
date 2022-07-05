import React, { useEffect, useState } from "react";
import "./itemListContainer.css";
import Title from "../Title";
import ItemList from "../ItemList";
import RingLoader from 'react-spinners/RingLoader';
import { getData } from "../../mocks/fakeApi";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ bienvenida }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoriaId } = useParams();

    useEffect(() => {
        if (categoriaId) {
            getData
                .then(result => setData(result.filter(perfume => perfume.category === categoriaId || perfume.category2 === categoriaId || perfume.category3 === categoriaId)))
                .finally(() => setLoading(false))
        } else {
            getData
                .then((result) => setData(result))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [categoriaId])

    const onAdd = (cantidad, titulo, referencia) => {
        console.log(`añadiste ${cantidad} unidades de ${titulo} ${referencia} al carrito`);
    }
    return (
        <>
            <Title greeting={bienvenida} />
            <div>
                {loading ? <div className="loadingCard"> <div className="centrado"><h1 className="cargando">Cargando contenido...</h1></div> <div className="loaderItem centrado"><RingLoader size={160} margin={5} color='rgb(57, 211, 231)' /></div> <div className="centrado"><h3 className="cargando">Espere un momento...</h3></div> </div> : <ItemList data={data} onAdd={onAdd} initial={1} />}
            </div>
        </>
    )
}

export default ItemListContainer;