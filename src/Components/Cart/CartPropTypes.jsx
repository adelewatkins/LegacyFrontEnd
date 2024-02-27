import Cart from "./Cart";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CartPropTypes(props) {
    const navigate = useNavigate();


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
            <button onClick={() =>
              navigate("/cart/delete/" + props.id)
            }style={{ marginRight: "10px"}} type="submit" className="btn btn-danger btn-md">
              {" "}
              Delete Cart{" "}
            </button> 
    
        </Card.Body>
    </Card >


      );
}

export default CartPropTypes;