import logo from './logo.svg';
import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Item from "./Components/Item/Item";
import Cart from "./Components/Cart/Cart";
import EditItem from './Components/Item/EditItem';
import EditCart from './Components/Cart/EditCart';
import UserPage from ".Components/UserPage/UserPage";
import Preferences from ".Components/Preferences/Preferences";

function App() {
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/userpage">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


  
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
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Item />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/userpage"element={<UserPage/>} />
      <Route path="/preferences" element= {<Preferences/>} />
       <Route path="/item/edit/:id" element={<EditItem />} />
      <Route path="/cart/edit/:id" element={<EditCart />} />
      
      </Routes>
    </Router>
  


export default App;
