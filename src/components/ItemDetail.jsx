import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from "../CartContext";

export const ItemDetail = ({data}) => {

    const [goToCart, setGoToCart] = useState(false);
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        alert(`Agregaste al carrito ${quantity} productos.`);
        setGoToCart(true);
        addProduct(data, quantity);
    }

    return (
        <div className="card">
            <div className="card-body">
                <img className="detail_image" src={data.image} alt=""/>
                <div className="content">
                    <h1 className="card-title">{data.title}</h1>
                    <p className="card-text text-secondary">{data.description}</p>
                    <h2>{data.price}</h2>
                    {
                        goToCart
                        ? <Link to='/cart' type="button" class="btn btn-danger">IR A PAGO</Link>
                        :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
                    }

                </div>

            </div>

        </div>
        
    );
}

export default ItemDetail;