import React, {createContext, useState} from 'react';

export const CartContext = createContext();

function CartContextProvider ({children}) {

    const [cart, setCart] = useState([]);

    const isInCart = (item) => cart.find(i => i.id === item.id) ? true : false;

    const addToCart = (item) => setCart([...cart, item])

    const removeFromCart = (item) =>{
        setCart(cart.filter((e) => e.id !== item.id))
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider