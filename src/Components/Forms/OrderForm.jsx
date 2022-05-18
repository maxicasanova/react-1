import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';
import { CartContext } from '../Context/CartContextProvider';
import { collection, getFirestore, serverTimestamp, doc, setDoc} from 'firebase/firestore';
import './OrderForm.css';

const schema = object({
    nombre: string().min(3, 'Debe tener al menos 3 caracteres').required('Este campo es requerido'),
    telefono: number().typeError("Debe ser un numero!")
                    .positive("No puede empezar con menos!")
                    .integer("No colocar puntos!")
                    .min(10000000, `Debe tener al menos 7 caracteres`)
                    .required('Este campo es requerido'),
    mail: string().email('Tiene que ser un email valido.').required('Este campo es requerido')
}).required();

export default function OrderForm() {

    const {cart} = useContext(CartContext);

    const {totalCarrito} = useContext(CartContext);

    const {clearCart} = useContext(CartContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const onSubmit = (data) => {

        let order = {
            buyer: data,
            items: cart,
            date: serverTimestamp(),
            total: totalCarrito
        };
        const db = getFirestore();

        let newOrderRef = doc(collection(db, "orders"));
        setDoc(newOrderRef, order)
        .then(() => {
            clearCart();
            navigate(`/order/${newOrderRef._key.path.segments[1]}`);
        })
        .catch((err) => {
            console.log(err);
            navigate('/order/problems')
        })
    }
    return (
        <>
        <h2 className='formTitle'>Ultimo paso antes de finalizar!</h2>
        <p className='formParag'>Por favor complete los siguientes datos.</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input {...register("nombre")} />
            <p>{errors.nombre?.message}</p>
            <label>Numero de telefono</label>
            <input {...register("telefono")} />
            <p>{errors.telefono?.message}</p>
            <label>E-mail</label>
            <input {...register("mail")} />
            <p>{errors.mail?.message}</p>
            <input type="submit" />
        </form>
        </>
    );
}

