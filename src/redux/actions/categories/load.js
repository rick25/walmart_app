import axios from "axios";

export const loadCategories = () => {
    return distpatch => {
        axios.get('http://localhost:3003/categories')
            .then(response => {
                distpatch({
                    type: 'LOAD_CATEGORIES',
                    payload: response.data
                })
            })
    }
}
