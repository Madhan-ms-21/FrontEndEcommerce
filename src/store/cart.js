const ADD_TO_CART = 'ADD_TO_CART' ;
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const addToCartRedux = (payload) => ({
    type : ADD_TO_CART,
    payload
})

const removeFromCartRedux = (payload) => ({
    type : REMOVE_FROM_CART,
    payload
})

const initialstate = {}

const reducer = (state = initialstate , action) => {
    switch(action.type){
        case  ADD_TO_CART:
            console.log("adding item to cart");
            return state;
        case REMOVE_FROM_CART:
            console.log('removing from cart');
            return state;
        default:
            return state;
    }

}

export default reducer;
export { addToCartRedux, removeFromCartRedux};