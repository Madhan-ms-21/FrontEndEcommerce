import { useCartContext } from "../context/Cart";

const AddToCart = ({product}) => {

    

    const {cart,addToCart , removeFromCart} = useCartContext();
    console.log(cart);

    const productInCart = cart[product.id];

    const handleAdd = (event) => {
        addToCart(product);
        event.stopPropagation();
    }

    const handleRemove = (event) => {
        removeFromCart(product);
        event.stopPropagation()
    }
    if(!productInCart) 
        return (
            <div 
                className="add-to-cart"
                onClick={handleAdd}
                >
                Add to Cart
            </div>)
    else{
        return (
            <div className="add-to-cart-container">
                <div className="add" onClick={handleRemove}>-</div>
                <div className="quantity">{productInCart.quantity}</div>
                <div className="add" onClick={handleAdd}>+</div>
                
            </div>
        )
    }


}

export default AddToCart;