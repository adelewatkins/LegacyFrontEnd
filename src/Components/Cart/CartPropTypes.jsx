import Cart from "./Cart";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CartPropTypes(props) {
    const navigate = useNavigate();

    function deleteCart(){
      axios.delete("http://localhost:8082/cart/remove/" + props.id)
      .then(response => {props.getCarts()})
      .catch(err => console.error(err))
    };


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
            </Card.Text>
            <button onClick={() =>
              navigate("/items/")
            }style={{ marginRight: "10px"}} type="submit" className="btn btn-success btn-lg">
              {" "}
              Go Shopping{" "}
            </button> 
            <br/>
            <button onClick={() =>
              navigate("/cart/edit/" + props.id)
            }style={{ marginRight: "10px"}} type="submit" className="btn btn-warning btn-md">
              {" "}
              Edit Cart{" "}
            </button> 
            <button style={{marginTop: "10px"}} className="btn btn-danger" onClick={deleteCart}>Delete Cart</button>
    
        </Card.Body>
    </Card >


      );
}

export default CartPropTypes;