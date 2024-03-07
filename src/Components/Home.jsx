import DisplayCarts from "./Cart/DisplayCarts";
import Cart from "./Cart/Cart";
import CartPropTypes from "./Cart/CartPropTypes";
import '../App.css';
import './Home.css';
function Home() {

    
    
    return (
        <div style={{textAlign: "center"}}>
        <h1 style={{fontSize: "102px", textDecoration: "underline" }}>Welcome To The Shop</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <img 
            src="https://th.bing.com/th/id/OIG1.Ud1gXZBsE0DYVs_7DBx7?w=1024&h=1024&rs=1&pid=ImgDetMain" 
            style={{display: "block", margin: "auto",width: "60%", height: "auto", animation: "rotation 25s linear infinite"}}
        />
    </div>
    )
}


export default Home;