import './App.css';
import React from 'react';
import { Footer } from './components/layout/Footer';
import Header from './components/layout/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './components/products/ProductDetails';
import Dashboard from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import Cart from './components/cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/productList" element={<ProductList/>} />
            <Route path="/newProduct" element={<NewProduct/>} />
            <Route path="/carrito" element={<Cart />}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
