import React from "react";
import { useCartContext } from "../CartContext";


const ItemCart = ({ controler }) => {
    const {removeProduct} = useCartContext();
    return (
        <div className="itemCart">
            <img src={controler.image} alt={controler.title} />
            <div>
                <p>Titulo: {controler.title} </p>
                <p>Cantidad: {controler.quantity} </p>
                <p>Precio u: {controler.price} </p>
                <p>Subtotal: ${controler.quantity * controler.price} </p>
                <button onClick={() => removeProduct(controler.id)}>Eliminar</button>
            </div>


        </div>
    )
}

export default ItemCart