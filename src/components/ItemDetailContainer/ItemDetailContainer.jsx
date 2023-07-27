import { useEffect, useState } from "react"
import { getItem } from '../../mock/data'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(()=> {
        getItem(id)
        .then((response) => setProduct(response))
        .catch((error) => console.log(error))
    },[])


    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer