import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProducts } from "../redux/actions/products/index";
import { loadCategories } from '../redux/actions/categories/index';
import { addToCart } from '../redux/actions/cart/index';
import Shop from './Shop';
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
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Connector);