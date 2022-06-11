import React, { Children, useState, useContext } from "react";
import Item from "./components/Item";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({Children}) => {
    const [cart, setCart] = useState ([]);


    const addProduct = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !==item.id);
        newCart.push ({...item, quantity: newQuantity});
        setCart(newCart);
        
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(controler => controler.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(controler => controler.id !==id));




    return (
        <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeProduct,
        addProduct
        }}>
            {Children}
        </CartContext.Provider>
    )
}

export default CartProvider;