import {createStore , combineReducers , applyMiddleware} from 'redux'
import cartReducer from './cart'
import {thunk} from 'redux-thunk'
import productListReducer from './productList'
const reducer = combineReducers({
    cart : cartReducer,
    productList : productListReducer
}
)
const store = createStore(reducer , applyMiddleware(thunk))

export default store;