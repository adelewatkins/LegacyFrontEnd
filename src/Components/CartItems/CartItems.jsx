import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from 'react-bootstrap';
import PropTypes from "prop-types";

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
        const total = items.length;
        setTotalItems(total);

    }

    function calculateCartTotal(items) {
        let total = 0;
        for (let i = 0; i < items.length; i++) {
            total += items[i].price;
        }
        setCartTotal(total.toFixed(2));
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
            <h1>Your Cart Summary</h1>
            <br />
            <h3>Number of items: {totalItems}</h3>
            <h3>Cart Total: £{cartTotal}</h3>
            <br />
            <div className="row">
                {shopping.items && shopping.items.length > 0 ? (
                    shopping.items.map(item => (
                        <div key={item.id} className="col-md-4 col-lg-2 col-sml-8">
                            <Card style={{ width: '18rem', marginBottom: '20px' }}>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{"£" + item.price.toFixed(2)}</Card.Subtitle>
                                    <Card.Text>
                                        <button style={{ marginLeft: "10px" }} className='btn btn-success '
                                            onClick={() => {
                                                axios.patch("http://localhost:8082/item/checkIn/" + item.id)
                                                    .then(response => {
                                                        console.log('Item removed from cart', response.data);
                                                        shoppingBasket();
                                                    })
                                                    .catch(error => {
                                                        console.error('Error checking item back in:', error);
                                                    });
                                            }}>Remove Item</button>
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