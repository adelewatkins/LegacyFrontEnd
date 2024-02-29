import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { row, col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import Item from "../Item/Item";

function CheckoutCarts() {
    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");


    function getCheckoutCart(){
        axios.get("http://localhost:8082/Items/get/" + params.id)
          .then((response) => {
            console.log("Response:", response);
            setProperty(response.data);
          
          })
          .catch((err) => console.error(err))}
          useEffect(getCheckoutCart, [])
      console.log(Item)
    return;
        }

        axios.get("http://localhost:8082/Items/get",
        {
            name,
            price,
            quantity,
           CheckoutCarts: { id: params.id }
        })
    


