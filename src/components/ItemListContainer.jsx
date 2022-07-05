import React, {useState, useEffect} from "react";
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import Title from './Title';
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
import Swal from "sweetalert2";



export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState ([])

    const {categoriaId} = useParams();

    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        

        if(categoriaId) {
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
        getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        
        }else {
            getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data() }))))
        
        }

        

    }, [categoriaId])

    const onAdd = (quantity) => {
        Swal.fire(`Agregaste al carrito ${quantity} `);
    }

    return (
        <>
        <div className="container">
            <div className="col"> 
                    <Title greeting = {texto}/>
                    <ItemList data={data}/>
            </div>
            
        </div>
        
        </>
        
    );
}

export default ItemListContainer;
