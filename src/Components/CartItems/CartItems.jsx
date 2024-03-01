import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function CartItems() {
    const [shopping, setShopping] = useState([]);
    const navigate = useNavigate();
    const params = useParams();


    function shoppingBasket() {
        axios.get("http://localhost:8082/cart/get/" + params.id)
            .then((response) => {
                console.log("response" + response.data); 
                setShopping(response.data);
            })
            .catch((err) => console.error(err))
    }

    useEffect(shoppingBasket, [])
    console.log(shopping)




    return (

        <div>
            <br />

            <button onClick={() =>
                navigate("/items")
            } style={{ marginRight: "10px" }} type="submit" className="btn btn-info btn-md">
                Continue Shopping</button>
            <br />
            <br />
            <h1>Items in your cart</h1>
            <ul>
                {shopping.items && shopping.items.length > 0 ? (
                    shopping.items.map(item => (
                        <li key={item.id}>
                            <div>Name: {item.name}</div>
                            <div>Price: {"£" + item.price}</div>
                            <div>Quantity: {item.quantity}</div>
                        </li>
                    ))
                ) : (
                    <p>No items in the cart</p>
                )}
            </ul>
           
        </div>
    );
}

export default CartItems;