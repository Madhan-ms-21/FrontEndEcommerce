const AddToCart = ({product}) => {

    const productInCart = false;

    if(!productInCart) 
        return (
            <div 
                className="add-to-cart"
                >
                Add to Cart
            </div>)
    else{
        return (
            <div className="add-to-cart-container">
                <div className="add">+</div>
                <div className="quantity">0</div>
                <div className="remove">-</div>
                
            </div>
        )
    }


}

export default AddToCart;