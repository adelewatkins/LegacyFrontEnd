import { useState, useEffect } from "react";
import axios from "axios";
import DisplayCarts from "./DisplayCarts";

function Cart(props) {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [carts, setCarts] = useState([]);

    function getCarts() {
        axios.get("http://localhost:8082/Cart/get")
            .then((response) => { setCarts(response.data) })
    }
    useEffect(getCarts, [])

    function CheckCarts() {


        axios.get("http://localhost:8082/Cart/get").then(response => {
            console.log(response)
            for (const carts of response.data) {
                if (carts.name.toLowerCase() === name.toLowerCase()) {
                    alert("Cart already exists")
                    return;
                }
            }

            axios.post("http://localhost:8082/Cart/create",
                {
                    name
                })
                .then(response => {
                    setName("");
                    getCarts();
                })
                .catch(err => console.error(err))

        })
    }

    return (
        <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            CheckCarts();
          }}>
  
          {" "}
        
    <h1>My Cart &nbsp;</h1>
    <label htmlFor="name">Cart Name &nbsp;</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          className="form-control"
        ></input>
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Add Cart
        </button>
        <br />
      </form>
      <br />
      <br />
      <div>
        <DisplayCarts carts={carts} getCarts={getCarts}/>
      </div>
    </div>
    )
}

export default Cart;