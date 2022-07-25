import React, { useState } from "react";
import UndoIcon from '@mui/icons-material/Undo';
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import "./form.css"
import HomeIcon from '@mui/icons-material/Home';

const Form = ({ generarPedido, name, setName, email, setEmail, phone, setPhone, notValid, orderId, emailValid, setEmailValid, surname, setSurname }) => {
    const { clearCart } = useCartContext();
    const [compraRealizada, setCompraRealizada] = useState(true);
    const onSubmit = (event) => {
        event.preventDefault();
    };

    const confirmarCompra = () => {
        generarPedido();
        setCompraRealizada(false);
        clearCart();
    }

    if (compraRealizada) {
        return (
            <>
                <div className="tituForm">
                    <h2>Datos del comprador</h2>
                    <p>Rellene el siguiente formulario con sus datos para poder efectuar la compra</p>
                </div>
                <form onSubmit={onSubmit} className="formContainer">
                    <div className="flx-start">
                        <div className="itemForm">
                            <label htmlFor="nameUser" className="form-label" >Nombres <span className="redOblig">*</span></label>
                            <input required
                                type="text"
                                placeholder="Nombres"
                                className="formInput"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="itemForm">
                            <label htmlFor="surnameUser" className="form-label" >Apellidos <span className="redOblig">*</span></label>
                            <input required
                                type="text"
                                placeholder="Apellidos"
                                className="formInput"
                                value={surname}
                                onChange={(e) => setSurname(e.target.value)} />
                        </div>
                        <div className="itemForm">
                            <label htmlFor="phoneUser" className="form-label" >Numero celular <span className="redOblig">*</span></label>
                            <input required
                                type="tel"
                                placeholder="Numero de contacto"
                                className="formInput"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <div className="itemForm">
                            <label htmlFor="emailUser" className="form-label" >Dirección de correo electronico (Email) <span className="redOblig">*</span></label>
                            <input required
                                type="email"
                                placeholder="Dirección de correo electronico"
                                className={notValid ? "bordeError" : "formInput"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="itemForm">
                            <label className="form-label" htmlFor="email">Repita su correo electronico (Email) <span className="redOblig">*</span></label>
                            <input required
                                value={emailValid}
                                onChange={(e) => setEmailValid(e.target.value)}
                                className={notValid ? "bordeError" : "formInput"}
                                type="email"
                                placeholder="Repite tu email" />
                        </div>
                    </div>
                    <div className="botonesForm">
                        <Link to="/cart"><button className="botonVolver"><UndoIcon /> Volver al carrito</button></Link>
                        <button className="botonConfirmar" disabled={notValid} onClick={(e) => (confirmarCompra(e))} type="submit">Confirmar compra</button>
                    </div>
                </form>
            </>
        )
    }

    return (
        <>

            <div className="formTrue">
                <h2>Muchas gracias por su compra! </h2>
                <p>su codigo de pedidio es: <span className="idBlack">{orderId}</span>, recuerde que para cualquier reclamo se le pedira este codigo</p>
                <Link className="linkInitial" to="/">Volver al inicio <HomeIcon />  </Link>
            </div>
        </>
    )
}

export default Form;