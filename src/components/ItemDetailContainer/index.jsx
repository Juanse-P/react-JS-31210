import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { getDetailPerfume } from "../../mocks/fakeApi";
import RingLoader from 'react-spinners/RingLoader';
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getDetailPerfume
            .then((result) => setData(result))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    const onAdd = (cantidad, titulo, referencia) => {
        console.log(`añadiste ${cantidad} unidades de ${titulo} ${referencia} al carrito`);
    }

    return (
        <div>
            {loading ? <div className="loadingCard"> <div className="centrado"><h1 className="cargando">Cargando contenido...</h1></div> <div className="loaderItem centrado"><RingLoader size={160} margin={5} color='rgb(57, 211, 231)' /></div> <div className="centrado"><h3 className="cargando">Espere un momento...</h3></div> </div> : <ItemDetail data={data} onAdd={onAdd} initial={1} />}
        </div >
    )
}

export default ItemDetailContainer;