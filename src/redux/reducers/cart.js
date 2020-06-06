const cart = (storeData, action) => {
    let newStore = {
        cart: [],
        cartItems: 0,
        cartPrice: 0,
        ...storeData,
    }
    switch (action.type) {
        case 'ADD_TO_CART':
            const p = action.payload.product;
            const q = action.payload.quantity;

            let existente = newStore.cart.find(item => item.product.id === p.id);
            if (existente) {
                existente.quantity += q;
            } else {
                newStore.cart = [
                    ...newStore.cart,
                    action.payload
                ]
            }
            newStore.cartItems += q;
            newStore.cartPrice += p.price * q;
            return newStore;

        case 'UPDATE_CART':

            break;

        case 'CART_REMOVE':

            break;

        case 'CLEAR_CART':
            break;

        default:
            return storeData || {};
    }
}

export { cart };