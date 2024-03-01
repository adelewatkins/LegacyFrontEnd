import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';

function CartItems() {
    const [shopping, setShopping] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const navigate = useNavigate();
    const params = useParams();


    function shoppingBasket() {
        axios.get("http://localhost:8082/cart/get/" + params.id)
            .then((response) => {
                console.log("response" + response.data); 
                setShopping(response.data);
                calculateTotalItems(response.data.items);
                calculateCartTotal(response.data.items);
            })
            .catch((err) => console.error(err))
    }

    useEffect(shoppingBasket, [])
    console.log(shopping)

    function calculateTotalItems(items) {
        let total = 0;
        items.forEach(item => {
            total += 1;
        });
        setTotalItems(total);
    
    }

    function calculateCartTotal(items) {
        let total = 0;
        items.forEach(item => {
            total += item.price
        });
        setCartTotal(total);
    }




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
            <h3>Number of items: {totalItems}</h3>
            <h3>Cart Total: £{cartTotal}</h3>
            <div className="row">
            {shopping.items && shopping.items.length > 0 ? (
                shopping.items.map(item => (
                    <div key={item.id} className="col-md-4">
                        <Card style={{ width: '18rem', marginBottom: '20px' }}>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{"£" + item.price}</Card.Subtitle>
                                <Card.Text>
                                    Quantity: {item.quantity}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            ) : (
                <p>No items in the cart</p>
            )}
        </div>
        </div>
    );
}

export default CartItems;