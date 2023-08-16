import React from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

/*     return (
        <div>
        {cart.length === 0 ? <p>no hay elementos en el carrito</p> : <div>{Cart}</div>}
        
        </div>  */

    if (cart.length === 0) {
        return (
            <>
                <p>No hay ningún producto agregado al carrito</p>
                <Link to='/'>Seguir comprando</Link>
            </>
        );
        }
    
        return (
            <>
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
                <p>
                    Importe total: {totalPrice()}
                </p>
            </>
            
        )
}
export default Cart;

