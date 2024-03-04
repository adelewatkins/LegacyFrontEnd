
import PropTypes from "prop-types";
import Item from "./Item";
import { Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import EditItem from "./EditItem";

function ItemPropTypes(props) {

  

    const navigate = useNavigate();
    const [quantity, setQuantity] = useState("");
     

    const addToCart = () => {
     
      axios.patch(`http://localhost:8082/item/checkOut/${props.id}/1`) 
          .then(response => {
              console.log('Item added to cart:', response.data);
              // setQuantity(0);
              navigate("/cart/1/")
          })
          .catch(error => {
              console.error('Error adding item to cart:', error);
          });
  }

    
      
    

    function buttonDisplay() {
    
        if(props.quantity == 0 ) {
            return (
              <>
                <button style={{marginLeft: "10px"}} className='btn btn-danger' 
                disabled="disabled">Out Of Stock</button>
              </>
            )
          } else {
            return (
                <>
                <button style={{marginLeft: "10px"}} className='btn btn-success ' 
                onClick={addToCart}>Add To Cart</button>
                </>
            )
          }
        }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://th.bing.com/th/id/R.9b757e2f5b3f68df7186261c36b892c2?rik=X1aQeJyJjP4oaQ&riu=http%3a%2f%2fwww.musicinminnesota.com%2fwp-content%2fuploads%2f2017%2f08%2fPhotos-Coming-Soon.jpg&ehk=aUQtqB0bWSFKlzHvFnqj1Vdzrg1AoQltTvZejPMV4Pk%3d&risl=&pid=ImgRaw&r=0" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                {"Price: £" + props.price.toFixed(2)}
                <br/>
                {"Quantity available: " + props.quantity}

            </Card.Text>
            &nbsp;
          {buttonDisplay()}
          <button onClick={() =>
              navigate("/item/edit/" + props.id)
            }style={{ marginRight: "10px"}} type="submit" className="btn btn-warning btn-md">
              {" "}
              Edit Item{" "}
            </button> 
        </Card.Body>
    </Card >


    )
}

ItemPropTypes.propType = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
};

export default ItemPropTypes;