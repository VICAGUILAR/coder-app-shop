import React from "react";
import { useCartContext } from "../CartContext";


const ItemCart = ({ controler }) => {
    const {removeProduct} = useCartContext();
    return (
        <div className="itemCart text-center card-body">
            <img src={controler.image} alt={controler.title} className="detail_image"  />
            <div>
                <p>Titulo: {controler.title} </p>
                <p>Cantidad: {controler.quantity} </p>
                <p>Precio unitario: {controler.price} </p>
                <p>Subtotal: ${controler.quantity * controler.price} </p>
                <button onClick={() => removeProduct(controler.id)} type="button" className="btn btn-danger">Eliminar</button>
            </div>


        </div>
    )
}

export default ItemCart