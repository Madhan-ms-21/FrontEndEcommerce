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
        case  ADD_TO_CART: {
            console.log("adding item to cart");
            const newCart = {...state};
            const product = action.payload
            if(!newCart[product.id]){
                newCart[product.id] = {
                    id : product.id,
                    quantity : 1
                }
            }
            else{
                const newprod = {...state[product.id]};
                newprod.quantity += 1;
                newCart[product.id] = newprod;
            }
            return newCart;
            // return state;
        }
        case REMOVE_FROM_CART: {
            console.log('removing from cart');
            const newCart = {...state};
            const product = action.payload
            if(!newCart[product.id]){
                return newCart;
            }
            else if (state[product.id].quantity === 1) {
                delete newCart[product.id];
              }
            else{
                const newprod = {...state[product.id]};
                newprod.quantity -= 1;
                newCart[product.id] = newprod;
            }
            return newCart;
            // return state;
        }
        default:
            return state;
    }

}

export default reducer;
export { addToCartRedux, removeFromCartRedux};