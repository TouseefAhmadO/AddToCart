import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import Home from './components/home';
import { CartProvider } from "react-use-cart"
import Cartitem from './components/cartitem';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      < CartProvider>
        < Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="Cartitem" element={<Cartitem />} />
        </Routes>
      </CartProvider>

    </div>
  );
}

export default App;
