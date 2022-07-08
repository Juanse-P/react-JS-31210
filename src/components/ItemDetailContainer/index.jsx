import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import { getData } from "../../mocks/fakeApi";
import RingLoader from 'react-spinners/RingLoader';
import "./ItemDetailContainer.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const { detalleId } = useParams();
    useEffect(() => {
        getData
            .then(result => setData(result.find(perfume => perfume.id === parseInt(detalleId))))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [detalleId])

    return (
        <div>
            {loading ? <div className="loadingCard"> <div className="centrado"><h1 className="cargando">Cargando contenido...</h1></div> <div className="loaderItem centrado"><RingLoader size={160} margin={5} color='rgb(57, 211, 231)' /></div> <div className="centrado"><h3 className="cargando">Espere un momento...</h3></div> </div> : <ItemDetail data={data}/>}
        </div >
    )
}

export default ItemDetailContainer;