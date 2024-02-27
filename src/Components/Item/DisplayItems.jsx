

function DisplayItems(props) {



    const itemArray = [];

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