import ItemPropTypes from "./ItemPropTypes";



function DisplayItems(props) {



    const itemArray = [];
    for (const item of props.items) {
        itemArray.push(
          <ItemPropTypes
            key={item.name + " " + item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            getItems={props.getItems}
          />
        );
      }

    return (
        <div>
            <h2>Items For Sale</h2>
            <br />
            <div className="container-fluid">
                <div className="row">{itemArray}</div>
            </div>
        </div>
    )

}

export default DisplayItems;