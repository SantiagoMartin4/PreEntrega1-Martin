import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import CartProvider from './Context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import { useCartContext } from './Context/CartContext.jsx';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer greet='Somos SySTec - Servicios y Soluciones Tecnológicas'/> }/>    
          <Route path='/category/:categoryId' element={ <ItemListContainer greet='Productos en la categoría: '/> }/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/item/:id' element={ <ItemDetailContainer/> }/>    
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
