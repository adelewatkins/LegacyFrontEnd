import Cart from "./Cart";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CartPropTypes(props) {
  const navigate = useNavigate();

  function deleteCart() {
    axios.delete("http://localhost:8082/cart/remove/" + props.id)
      .then(response => { props.getCarts() })
      .catch(err => console.error(err))
  };





  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          < Card.Img src="https://media.istockphoto.com/photos/shopping-basket-with-variety-of-grocery-products-isolated-on-white-picture-id179223663?k=6&m=179223663&s=612x612&w=0&h=YErLythMZRtsl5tojyVWTSRkJYwh_01WyYNrmhXf6GE=" />
        </Card.Text>
        <button onClick={() =>
          navigate("/cart/" + props.id)
        } style={{ marginBottom: "10px", marginLeft: "35px" }} type="submit" className="btn btn-info btn-lg">
          {" "}
          View My Cart{" "} 
        </button>
        <br />
        <button onClick={() =>
          navigate("/cart/edit/" + props.id)
        } style={{ marginLeft: "55px" }} type="submit" className="btn btn-warning btn-sm">
          {" "}
          Edit Cart Name{" "}
        </button>
        {/* <button className="btn btn-danger btn-sm" onClick={deleteCart}>Delete Cart</button> */}

      </Card.Body>
    </Card >


  );
}

export default CartPropTypes;