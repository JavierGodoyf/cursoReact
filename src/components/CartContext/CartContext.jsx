import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingProductIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += product.quantity;
                return updatedCart;
            }
            return [...prevCart, product];
        });
    };

    const removeItemFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartItemCount = cart.reduce((total, product) => total + product.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart, cartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
