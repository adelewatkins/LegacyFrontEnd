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
            
        </div>
    )

}

export default CartItems;