import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from "../redux/actions/products/index";
import { loadCategories } from '../redux/actions/categories/index';
import { addToCart, updateCartQuantity, removeFromCart, clearCart } from '../redux/actions/cart/index';
import Shop from './Shop';
import { CartDetails } from './CartDetails';
class Connector extends Component {
    componentDidMount() {
        this.props.loadProducts();
        this.props.loadCategories();
    }

    filterProducts(products = [], category) {
        return (!category || category === "All")
            ? products
            : products.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    render() {
        return (
            <Switch>
                <Route path="/shop/products/:category?"
                    render={routeProps =>
                        <Shop
                            {...this.props}
                            {...routeProps}
                            products={this.filterProducts(this.props.products, routeProps.match.params.category)}
                        />
                    }
                />
                <Route path="/shop/cart"
                    render={routeProps =>
                        <CartDetails
                            {...this.props.cart}
                            {...routeProps}
                            updateCartQuantity={this.props.updateCartQuantity}
                            removeFromCart={this.props.removeFromCart}
                        />
                    }
                />
                <Redirect to="shop/products" />
            </Switch>
        )
    }
}

const mapStateToProps = (store) => ({
    ...store
})

const mapDispatchToProps = {
    loadProducts,
    loadCategories,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Connector);