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
            newStore.cart = newStore.cart.map(item => {
                if (item.product.id === action.payload.product.id) {
                    const diff = action.payload.quantity - item.quantity;
                    newStore.cartItems += diff;
                    newStore.cartPrice += (item.product.price * diff);
                    return action.payload;
                } else {
                    return item;
                }
            })
            return newStore;

        case 'CART_REMOVE':
            let selection = newStore.cart.find(item => item.product.id === action.payload.id);
            newStore.cartItems -= selection.quantity;
            newStore.cartPrice -= selection.quantity * selection.product.price;
            newStore.cart = newStore.cart.filter(item => item !== selection);
            return newStore;

        case 'CLEAR_CART':
            return {
                ...storeData,
                cart: [],
                cartItems: 0,
                cartPrice: 0
            }

        default:
            return storeData || {};
    }
}

export { cart };