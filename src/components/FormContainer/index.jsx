import React, { useState } from "react";
import Form from "../Form";
import { useCartContext } from "../../Context/CartContext";
import { addDoc, collection, doc, getFirestore, serverTimestamp, updateDoc } from "firebase/firestore";
import "./formContainer.css";

const FormContainer = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orderId, setOrderId] = useState('');
    const [emailValid, setEmailValid] = useState('');

    const { cart, totalPrice } = useCartContext();

    const generarPedido = () => {

        const ordenDeCompra = {}
        ordenDeCompra.usuario = { name, surname ,email, phone };
        ordenDeCompra.date = serverTimestamp();
        ordenDeCompra.totalAPagar = totalPrice();
        ordenDeCompra.items = cart;

        const db = getFirestore();
        const ordersCollection = collection(db, 'ordenes');
        addDoc(ordersCollection, ordenDeCompra)
            .then(({ id }) => setOrderId(id))
            .catch(err => console.log('error en el proceso de compra: ', err))
        
        cart.forEach(element => {
            const updateCollection = doc(db, 'productos', element.id);
            updateDoc(updateCollection, {stock: element.stock - element.quantity})
        });

    }

    const notValid =
        !(name.length &&
            email.length &&
            phone.length &&
            emailValid.length > 0 &&
            email === emailValid
        )

    return (
        <div className="formContainerExt">
            <Form
                generarPedido={generarPedido}
                name={name}
                setName={setName}
                surname={surname}
                setSurname={setSurname}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                orderId={orderId}
                emailValid={emailValid}
                setEmailValid={setEmailValid}
                notValid={notValid}
            />
        </div>
    )
}

export default FormContainer;