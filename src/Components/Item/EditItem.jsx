import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditItem() {
    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8082/item/get/" + params.id)
        .then((res) => {
            console.log(res);
            setName(res.data.name);
            setPrice(res.data.price);
            setQuantity(res.data.quantity);
        }).catch(err => console.error(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .put("http://localhost:8082/item/edit/" + params.id, {
            name,
            price,
            quantity
    })
    .then(() => {
      navigate("/items");
    })
    .catch((error) => console.error(error));
};

    return (
        <div>
        <form onSubmit={handleSubmit}>
        {" "}
        <h1>Edit Item &nbsp;</h1>
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
        <label htmlFor="quantity">Quantity &nbsp;</label>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          id="quantity"
          type="Number"
          className="form-control"
        ></input>
        
        <br />
        <button type="submit" className="btn btn-success btn-md">
          Submit
        </button>
        <br />
      
</form>
</div>
      );
}

export default EditItem;