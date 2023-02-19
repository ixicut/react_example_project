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

  const [products, setProducts] = useState([
    { id: 1, title: "Product1", price: 127 },
    { id: 2, title: "Product2", price: 954 },
    { id: 3, title: "Product3", price: 567 },
    { id: 4, title: "Product4", price: 673 },
    { id: 5, title: "Product5", price: 123 },
    { id: 6, title: "Product6", price: 4567 }
  ]);

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
          <Route path='/edit' element={<EditProduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
