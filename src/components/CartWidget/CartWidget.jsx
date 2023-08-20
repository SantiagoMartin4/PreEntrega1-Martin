import './CartWidget.css';
import carrito from '../../assets/img/carrito.png';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


export const CartWidget = () => {
    const {totalProducts} = useCartContext()
    return (
        <div className='cartDiv'>
            <img className='cart' src={carrito} alt='Cart Widget'></img>
            <span>{totalProducts() || ''}</span>
            <Link to='/cart'>Ver Carrito</Link>
        </div>
    )
}

export default CartWidget;




