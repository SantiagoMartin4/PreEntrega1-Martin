import './CartWidget.css';
import carrito from '../../assets/img/carrito.png';


function cart () {
    return (
        <div className='cartDiv'>
            <img className='cart' src={carrito} alt='Cart Widget'></img>
            <span>0</span>
        </div>
    )
}

export default cart;



