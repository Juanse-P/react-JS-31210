import React from "react";
import "./title.css";

const Title = ({ greeting }) => {
    return (
        <div className="divSaludo">
            <h1 className="divHijo">{greeting}</h1>
        </div>
    )
}

export default Title;