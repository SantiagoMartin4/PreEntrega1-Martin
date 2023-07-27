import Navbar from './components/Navbar/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={ <ItemListContainer greet='Somos SySTec - Servicios y Soluciones Tecnológicas'/> }/>    
      <Route path='/category/:categoryId' element={ <ItemListContainer greet='Productos en la categoría: '/> }/>
      <Route path='/item/:id' element={ <ItemDetailContainer/> }/>    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
