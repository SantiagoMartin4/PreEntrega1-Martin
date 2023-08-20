import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext";


const ItemDetail = ( {product} ) => {

    const [amountAdded, setAmountAdded] = useState(null);
    const { addProduct } = useCartContext(); 

    const handleOnAdd = (amount) => {
        setAmountAdded(amount);
        addProduct(product, amount);
    }
        if(product.img === undefined) {
            return <div>Loading...</div>
    }
    
    return (
        <div className='d-flex flex-column align-items-center'>
            <h3>detalle de: {product.name} </h3>
            <img style={{ maxWidth: '30%' }} src={product.img} alt={product.name}/>
            <p>{product.description}</p>
            <p>${product.price}</p>
            
            <div>
                {       
                    amountAdded > 0 ? (
                        <Button variant="light">
                            <Link to='/Cart'>Terminar compra</Link>
                        </Button>                        
                    ) : (
                        <ItemCount initial={1} stock={product.stock} onAdd={handleOnAdd}></ItemCount>
                    )
                }
            </div>
        </div>
)
}

export default ItemDetail;