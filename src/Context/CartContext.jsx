import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart= () => setCart([]);

    const isInCart = (id) => { 
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const addProduct = (product, amount) => {
        if(isInCart(product.id)) {
            setCart(cart.map(prod => {
                return prod.id === product.id ? { ...prod, amount: prod.amount + amount} : prod
            }));
        } else {
            setCart([...cart, { ...product, amount: amount}]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.amount * act.price, 0);
    }


    const totalProducts = () => cart.reduce((acumulator, actualProduct) => acumulator + actualProduct.amount, 0); 

    return (
        <CartContext.Provider value={{
            clearCart: clearCart,
            isInCart: isInCart,
            removeProduct: removeProduct,
            addProduct: addProduct,
            totalPrice: totalPrice,
            totalProducts: totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;