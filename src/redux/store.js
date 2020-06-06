import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const products = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}

const categories = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_CATEGORIES':
            return action.payload;
        default:
            return state;
    }
}

export default createStore(combineReducers({ products, categories }), applyMiddleware(thunk));