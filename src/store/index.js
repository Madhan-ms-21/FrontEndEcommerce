import {createStore , combineReducers , applyMiddleware} from 'redux'
import cartReducer from './cart'
import thunk from 'redux-thunk'
import productListReducer from './productList'
import headerReducer from './header'
import { composeWithDevTools } from '@redux-devtools/extension'

const reducer = combineReducers({
    cart : cartReducer,
    productList : productListReducer,
    header : headerReducer
}
)
const store = createStore(reducer , composeWithDevTools(applyMiddleware(thunk)))

export default store;