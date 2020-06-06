import React from 'react';
import CategoryNavigation from './CategoryNavigation';
import ProductList from './ProductList';
import CartSummary from './CartSummary';

const Shop = (props) => {
    const handleAddToCart = (...args) => {
        props.addToCart(...args);
        props.history.push("/shop/cart");
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">WALMART APP</div>
                    <CartSummary {...props.cart} />
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products" categories={props.categories} />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={props.products} addToCart={handleAddToCart} />
                </div>
            </div>
        </div>
    );
}

export default Shop;
