import React,{ useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = ({greet}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams ()
    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');;
        
        if(categoryId){
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
        }else{
            getDocs(queryCollection)
            .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
    }
}, [categoryId])

    if(products.length === 0) {
        return <div>Loading...</div>
}
    return (
    <div>
        <div className='p'>
            <h2>{greet}<span>{categoryId && categoryId}</span></h2>
        </div>
        <div>
            <ItemList products={products}></ItemList>
        </div>
    </div>
    )
}

export default ItemListContainer;