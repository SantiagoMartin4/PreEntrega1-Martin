import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( {product} ) => {
    const onAdd = (amount) => {
        console.log(`Compraste ${amount} productos`)
    }
    return (
        <div className='d-flex flex-column align-items-center'>
            <h3>detalle de: {product.name} </h3>
            <img src={product.img} />
            <p>{product.description}</p>
            <p>${product.price}</p>
            <ItemCount stock={product.stock} onAdd={onAdd}></ItemCount>
        </div>
    )
}

export default ItemDetail