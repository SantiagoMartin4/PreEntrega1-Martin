import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
/* Voy a hacer:
funcion que devuelva true o false segun haya o no un producto en el carrito 
otra para limpiar el carrito 
otra para remover un prod del carrito 
otra para agregar el prod al carrito, que tiene la logica para no aceptar duplicados. Que acumule si son los mismos productos . 
 */
    const [cart, setCart] = useState([]);

    const clearCart= () => setCart([]);

    const isInCart = (id) => { 
        return cart.find(product => product.id === id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    /* esta funcion recibe un id y devuelve el carrito mediante un filter con todos los productos menos el que contenga ese id que le paso (el filter hace eso)
 */

/*     const addProduct = (product, newAmount) => {
        const newCart = cart.filter(prod => prod.id !== product.id);
        newCart.push({ ...product, amount: newAmount});
        setCart(newCart)
    } OPCION NUMERO 1 DE FUNCION ADD PRODUCT*/

    const addProduct = (product, amount) => {
        if(isInCart(product.id)) {
            setCart(cart.map(prod => {
                return prod.id === product.id ? { ...prod, amount: prod.amount + amount} : prod
            }));
        } else {
            setCart([...cart, { ...product, amount: amount}]);
        }
    }

    console.log('carrito:', cart);


    return (
        <CartContext.Provider value={{
            clearCart: clearCart,
            isInCart: isInCart,
            removeProduct: removeProduct,
            addProduct: addProduct,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;