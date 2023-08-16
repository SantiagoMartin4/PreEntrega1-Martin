import Item from "../Item/Item"

const ItemList = ( {products} ) => {
    return(
        <div className='d-flex justify-content-around align-items-center flex-wrap' style={{margin: '2rem',}}>
            {products.map((prod) => <Item key={prod.id} prod={prod} />)}
        </div>
    )
}
export default ItemList