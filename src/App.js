import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

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
      <ProductList products = { products } onProductDelete = { deleteProducts }/>
    </div>
  );
}

export default App;
