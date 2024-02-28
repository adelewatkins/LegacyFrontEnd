import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/Item/Item";
import Cart from "./Components/Cart/Cart";
import EditItem from './Components/Item/EditItem';
import EditCart from './Components/Cart/EditCart';
import CartItems from './Components/CartItems/CartItems';



function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/items">Items</Link>
        <Link to="/cart">My Cart</Link>
      </div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Item />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/item/edit/:id" element={<EditItem />} />
      <Route path="/cart/edit/:id" element={<EditCart />} />
      <Route path="/cart/:id" element={<CartItems/>} />
      </Routes>
    </Router>
  );
}

export default App;
