import React from 'react'
import { Button } from 'react-bootstrap'
import { useCartContext } from '../../Context/CartContext'
import './itemCart.css'

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return(
        <div className='itemCart'>
            <img src={product.img} alt={product.name}/>
            <div>
                <p>Título: {product.name}</p>
                <p>Cantidad: {product.amount}</p>
                <p>Precio unitario: {product.price}</p>
                <p>Subtotal: ${product.amount * product.price}</p>
                <Button onClick={() => removeProduct(product.id)}>Eliminar</Button>
            </div>
        </div>
    )
}

export default ItemCart
