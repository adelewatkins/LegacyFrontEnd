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
        axios.get("/cart/get/" + params.id)
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
            total = (total + items[i].price) * 1.0725;
        }
        setCartTotal(total.toFixed(2));
    }

    return (

        <div>
            <br />
            <h1>Your Cart Summary</h1>
            <br />
            <button onClick={() =>
                navigate("/item")
            } style={{ marginRight: "10px" }} type="submit" className="btn btn-info btn-md">
                Continue Shopping</button>
            <br />
            <br />

            <h4>Cart Total: £{cartTotal} (incl service charge)</h4>

            <h4>Number of items: {totalItems}</h4>

            <br />
            <div className="row">
                {shopping.items && shopping.items.length > 0 ? (
                    shopping.items.map(item => (
                        <div key={item.id} className="col-md-4 col-lg-3 col-sml-8">
                           <Card  border="dark" style={{ width: '18rem' }}>
                                <Card.Body>
                                <Card.Img variant="top" src="https://th.bing.com/th/id/R.9b757e2f5b3f68df7186261c36b892c2?rik=X1aQeJyJjP4oaQ&riu=http%3a%2f%2fwww.musicinminnesota.com%2fwp-content%2fuploads%2f2017%2f08%2fPhotos-Coming-Soon.jpg&ehk=aUQtqB0bWSFKlzHvFnqj1Vdzrg1AoQltTvZejPMV4Pk%3d&risl=&pid=ImgRaw&r=0" />
                                    <Card.Title style={{ textAlign: "center" }}>{item.name}</Card.Title>
                                    <Card.Subtitle style={{ textAlign: "center" }} className="mb-2 text-muted">{"£" + item.price.toFixed(2)}</Card.Subtitle>
                                    <Card.Text>
                                        <button style={{ marginLeft: "65px" }} className='btn btn-success '
                                            onClick={() => {
                                                axios.patch("/item/checkIn/" + item.id)
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