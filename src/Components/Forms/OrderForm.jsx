import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';
import { CartContext } from '../Context/CartContextProvider';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import OrderConfirm from '../Orders/OrderConfirm';

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

    const [orderId, setOrderId] = useState('');

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {

        let order = {
            buyer: data,
            items: cart,
            date: serverTimestamp(),
            total: totalCarrito
        };
        const db = getFirestore();

        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, order).then(({id}) => {
            setOrderId(id);
            clearCart();
        });
    }

    return (
        <>
        <h2>Ultimo paso antes de finalizar!</h2>
        <p>Por favor complete los siguientes datos.</p>
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
        <OrderConfirm  orderId={orderId} />
        </>
    );
}

// export default function TestFormulario() {

//     const [name, setName] = useState('');

//     const [email, setEmail] = useState('');

//     const [phone, setPhone] = useState('');

//     function terminarCompra() {
        //example buyer
        /* let buyer = {
        buyer: { name, phone, email },
        items: [{ id, title, price },{ id, title, price }],
        total: 100,
        }; */
//         alert('quiere terminar la compra ' + name + email + phone);
//     }

//     useEffect(() => {
//         console.log(name, email, phone);
//     }, [name, email, phone]);

//     return (
//             <>
//             <input type='text' value={name} onChange={(e) => {setName(e.currentTarget.value);}} />
//             <input type='text' value={email} onChange={(e) => {setEmail(e.currentTarget.value);}} />
//             <input type='text' value={phone} onChange={(e) => {setPhone(e.currentTarget.value);}} />
//             <button onClick={() => {terminarCompra();}}>COMPRAR</button>
//             </>
//     );
// }

