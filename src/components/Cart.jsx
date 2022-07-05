import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext";
import ItemCart from "./ItemCart";
import Swal from "sweetalert2";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Víctor',
            email: 'isc_vhpa@hotmail.com',
            phone: '967 000 0000',
            adress: 'calle xxxxx'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})), 
        total: totalPrice() ,
    }

    const handleClick = () => {

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id}) => Swal.fire(`Folio de compra: ${id}`));

    }

    if (cart.length === 0) {
        return (
            <>
            <div className="text-center">
                <h2 >No hay elementos en el carrito</h2>
                <Link to='/' type="button" className="btn btn-danger">Regresar a la Tienda</Link>
            </div>
                
            </>
        );
    }
    
    return(
        <>
        <div className="text-center">
          {
            cart.map(controler => <ItemCart key={controler.id} controler={controler}/>)
        }
        <p>
            total: {totalPrice()}
        </p>
        
        <button type="button" className="btn btn-dark" onClick={handleClick}>Emitir compra</button>
  
        </div>
        
        
        </>
        
    );
}

export default Cart;