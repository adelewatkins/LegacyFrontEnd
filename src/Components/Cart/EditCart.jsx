import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function EditCart() {
    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8082/cart/get")
            .then((res) => {
                console.log(res);
                setName(res.data.name);
            }).catch(err => console.error(err))
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put("http://localhost:8082/cart/edit/" + params.id, {
                name
            })
            .then(() => {
                navigate("/cart");
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {" "}
                <h1>Edit Cart &nbsp;</h1>
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
                    Submit
                </button>
                <br />

            </form>
        </div>
    );
}

export default EditCart;