import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import store from './redux/store';
import { loadProducts } from "./redux/actions/products";
import { loadCategories } from "./redux/actions/categories";

import App from './App';

store.dispatch(loadProducts());
store.dispatch(loadCategories());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
