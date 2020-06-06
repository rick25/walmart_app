import axios from "axios";

const loadProducts = () => {
    return distpatch => {
        axios.get('http://localhost:3003/products')
            .then(response => {
                distpatch({
                    type: 'LOAD_PRODUCTS',
                    payload: response.data
                })
            })
    }
}

export { loadProducts };