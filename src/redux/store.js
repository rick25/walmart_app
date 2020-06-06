import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { products } from "./reducers/products";
import { categories } from "./reducers/categories";
import { cart } from './reducers/cart';

const reducers = combineReducers({
    products,
    categories,
    cart
})

export default createStore(reducers, applyMiddleware(thunk));