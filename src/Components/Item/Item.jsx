import { useState, useEffect } from "react";
import axios from "axios";
import DisplayItems from "./DisplayItems";

function Item() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [items, setItems] = useState([]);
    

    function getItems() {
        axios.get("http://localhost:8082/item/get")
            .then((response) => { setItems(response.data) })
    }
    useEffect(getItems, [])

    const formatedPrice = parseFloat(price).toFixed(2);

    function checkItem() {


        axios.get("http://localhost:8082/item/get").then(response => {
            console.log(response)
            for (const items of response.data) {
                if (items.name.toLowerCase() === name.toLowerCase()) {
                    alert("Item already exists")
                    return;
                }
            }

            axios.post("http://localhost:8082/item/create",
                {
                    name,
                    price: formatedPrice,
                    quantity
                })
                .then(response => {
                    setName("");
                    setPrice("");
                    setQuantity("");
                    getItems();
                })
                .catch(err => console.error(err))

        })
    }



    return (

        <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkItem();
        }}>

        {" "}
        <h1>Items &nbsp;</h1>
        <label htmlFor="name">Item Name &nbsp;</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          className="form-control"
        ></input>
        <label htmlFor="price">Item Price &nbsp;</label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          id="price"
          type="£"
          className="form-control"
        ></input>
        {/* <label htmlFor="quantity">Quantity &nbsp;</label>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          id="quantity"
          type="Number"
          className="form-control"
        ></input> */}
        
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Add Item
        </button>
        <br />
      </form>
      <br />
      <br />
      <div>
        <DisplayItems items={items} getItems={getItems}/>
      </div>
    </div>
  );
}


export default Item;