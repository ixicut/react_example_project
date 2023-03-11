import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Component } from 'react';

import './App.css';
import "bulma/css/bulma.css";

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';

function App() {

  const [products, setProducts] = useState();

  const deleteProducts = (productId) => {
    const newProducts = products.filter(product => product.id !== productId);
    setProducts(newProducts);
  }

  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductList products={products} onProductDelete={deleteProducts} />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/add' element={<AddProduct/>}></Route>
          <Route path='/edit/:id' element={<EditProduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
