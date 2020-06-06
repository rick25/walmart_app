import axios from "axios";

export const loadProducts = () => {
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
