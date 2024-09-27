import { useSelector ,useDispatch} from "react-redux";
import { useCartContext } from "../context/Cart";
import {addToCartRedux,removeFromCartRedux} from '../store/cart'
const AddToCart = ({product}) => {

    

    // const {cart,addToCart , removeFromCart} = useCartContext();
    
    const cart = useSelector( (state) => state.cart);
    console.log(cart);

    const productInCart = cart[product.id];

    const handleAdd = (event) => {
        // addToCartR(product);
        dispatch(addToCartRedux(product));
        event.stopPropagation();
    }

    const dispatch = useDispatch()
    const handleRemove = (event) => {
        // removeFromCart(product);
        dispatch(removeFromCartRedux(product));
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