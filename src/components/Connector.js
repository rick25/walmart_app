import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProducts } from "../redux/actions/products/load";
import { loadCategories } from "../redux/actions/categories/load";

class Connector extends Component {
    componentDidMount() {
        this.props.loadProducts();
        this.props.loadCategories();
    }

    render() {
        return (
            <h1>Hola Mundo!</h1>
        )
    }
}

const mapStateToProps = (store) => ({
    ...store
})

const mapDispatchToProps = {
    loadProducts,
    loadCategories
}

export default connect(mapStateToProps, mapDispatchToProps)(Connector);