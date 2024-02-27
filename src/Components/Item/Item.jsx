import { useState, useEffect } from "react";
import axios from "axios";
import DisplayItems from "./DisplayItems";

function Item() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [items, setItems] = useState([]);

    function getItems() {
        axios.get("http://localhost:8082/item/get").then((response) => {
            setItems(response.data);
        });
    }
    useEffect(getItems, [])

    return (
        <div className="row">
            <div className="col">
                <form
                    className="drop-menu"
                    accordion
                    onSubmit={(e) => {
                        e.preventDefault();
                        axios
                            .post("http://localhost:8082/item/create", {
                                name,
                                price: parseInt(price),
                                quantity: parseInt(quantity)
                            })
                            .then((response) => {
                                setName("");
                                setPrice("");
                                setQuantity("");
                                getItems();
                            })
                            .catch((err) => console.error(err));
                    }}

                >
                    <h1>Our Items</h1>

                    <label htmlFor="name">Item Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        type="text"
                        className="form-control"
                    ></input>{" "}
                    <label htmlFor="price">Price</label>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        id="price"
                        type="£"
                        className="form-control"
                    ></input>{" "}
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        id="quantity"
                        type="number"
                        className="form-control"
                    ></input>{" "}
                    <br />
                    <div>
                        <button type="submit" className="btn btn-danger btn-md">
                            {" "}
                            Add Item{" "}
                        </button>
                    </div>
                </form>
            </div>
            <DisplayItems items={items} />
        </div>
    )
}

export default Item;