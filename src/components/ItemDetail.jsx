import React from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = ({data}) => {

    const onAdd = (quantity) => {
        alert(`Agregaste al carrito ${quantity} `);
    }

    return (
        <div className="container">
            <div className="detail">
                <img className="detail_image" src={data.image} alt="controladora"/>
                <div className="content">
                    <h1>{data.title}</h1>
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/>

                </div>

            </div>

        </div>
        
    );
}

export default ItemDetail;