import React, {createContext, useState} from 'react';

export const CartContext = createContext();

function CartContextProvider ({children}) {

    const [cart, setCart] = useState([]);

    const [totalCarrito, setTotalCarrito] = useState(0);

    const [carritoCambiado, setCarritoCambiado] = useState(false);

    const [agregado, setAgregado] = useState(false);

    const isInCart = (item) => cart.find(i => i.id === item.id) ? true : false;

    const addToCart = (item) => setCart([...cart, item]);

    const modifyCart = (item, number) => {
        const index = cart.findIndex(object => {
            return object.id === item.id;
        });
        let cart2 = cart;
        cart2[index].count = number;
        setCart(cart2);
        setCarritoCambiado(true);
    }

    const removeFromCart = (item) =>{
        setCart(cart.filter((e) => e.id !== item.id))
        setCarritoCambiado(true);
    };

    const clearCart = () => {
        setCart([]);
        setCarritoCambiado(true);
    };

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, isInCart, modifyCart, agregado, setAgregado, carritoCambiado, setCarritoCambiado, totalCarrito, setTotalCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider