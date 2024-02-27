
import PropTypes from "prop-types";

function ItemPropTypes() {

    ItemPropTypes.prototype = {
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.number.isRequired
    };

    return (
<div>
        <p>{"Item Name: " + props.name}</p>
        <p>{"Item Price: £" + props.price}</p>
        <p>{"Quantity: " + props.quantity}</p>



</div>


      );
}

export default ItemPropTypes;