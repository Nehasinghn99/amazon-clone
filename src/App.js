import React, {useState, useEffect} from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Page/Home';
import Register from './Page/Register'
import Login from './Page/Login'
import Cart from './Cart';
import "swiper/css/bundle";
import "./Component/MultiSlider.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ <Login />} />
          <Route path="/home" element={ <Home />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
  ;
}

export default App;
