import './App.css';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './CartContext';
import React from 'react';
import {Header} from './components/Header'


function App() {
  return (
    <>
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
        </Routes>
      </CartProvider>
      
    </BrowserRouter> 
    </>
  );
}

export default App;
