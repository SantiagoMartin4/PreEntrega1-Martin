import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

        useEffect(() => {
            const querydb = getFirestore();
            const queryDoc= doc(querydb, 'products', id);
            getDoc(queryDoc)
                .then(res => setProduct({id: res.id, ...res.data() }))
        }, [id])


        if(product.length === 0) {
            return <div>Loading...</div>
    }
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer