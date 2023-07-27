import React,{ useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../mock/data';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greet}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams ()

    useEffect(()=>{
        getProducts()
        .then((response)=> {
            if(categoryId){
                setProducts(response.filter((each)=> each.category === categoryId))
            }else{
                setProducts(response)}
        })
        .catch((error)=> console.log(error))
    },[categoryId])
    


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