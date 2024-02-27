import CartPropTypes from "./CartPropTypes";

function DisplayCarts(props) {
    
    const cartArray = [];
    for (const cart of props.carts) {
        cartArray.push(
          <CartPropTypes
            key={cart.name + " " + cart.id}
            id={cart.id}
            name={cart.name}
            getCarts={props.getCarts}
          />
        );
      }
    
    return ( 
        <div>
            <h2>Your Carts</h2>
            <br />
            <div className="container-fluid">
                <div className="row">{cartArray}</div>
            </div>
        </div>


     );
}

export default DisplayCarts;