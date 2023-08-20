import React, { useState } from 'react'
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { Button } from 'react-bootstrap';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';


const Cart = () => {
    const { clearCart } = useCartContext();
    const { cart, totalPrice } = useCartContext();
    const [orderId, setpedidoId] = useState("");
    const order = {
        buyer: {
            name: 'Santi',
            email: 'santi@gmail.com',
            phone: '123123',
        },
        items: cart,
        totalPrice: totalPrice(),
        date: serverTimestamp(),
    }

    const handleonClick = () => {
        const db = getFirestore();
        const collectionRef = collection(db, 'orders');
        addDoc(collectionRef, order)
            .then(({ id }) => {setpedidoId(id)});
            
    }
    if (cart.length === 0) {
        return (
            <>
                <p>No hay ningún producto agregado al carrito</p>
                <Link to='/'>Seguir comprando</Link>
            </>
        );
        }

    if (orderId) {
        return (
            <div className='container'>
                <h1 className='main-title'>Muchas gracias por tu compra</h1>
                <h5>Tu número de pedido es: {orderId}</h5>
                <p>Presiona el siguiente Botón para limpiar el Carrito y seguir comprando</p>
                <Button variant="light" onClick={clearCart}>Limpiar Carrito</Button>
            </div>
        )
    }
    
        return (
            <>
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
                <p>
                    Importe total: {totalPrice()}
                </p>
                <Button variant="danger" onClick={clearCart}>Limpiar Carrito</Button>
                <Button variant="success" onClick={handleonClick}>Generar orden de compra</Button>
            </>
            
        )
}
export default Cart;

