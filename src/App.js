// import logo from './logo.svg';
import './App.css';
// import React, {  useRef, useState,useEffect } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/Item/Item";
import Cart from "./Components/Cart/Cart";
import EditItem from './Components/Item/EditItem';
import EditCart from './Components/Cart/EditCart';

import Login from "./Components/Login/Login";
import Preferences from './Preferences';


function App() {
  return (
    <div>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/items">Items</Link>
          <br></br>
          <Link to="/cart">My Cart</Link>
          <br>
          </br>
        </div>
        <Routes>
          <Route path="/" element={<Preferences />} >
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/items" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/edit/:id" element={<EditItem />} />
          <Route path="/cart/edit/:id" element={<EditCart />} />

        </Routes>
      </Router>

    </div >



  );
}




export default App;
