import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { products } from "./reducers/products";
import { categories } from "./reducers/categories";

const reducers = combineReducers({
    products,
    categories,
})

export default createStore(reducers, applyMiddleware(thunk));