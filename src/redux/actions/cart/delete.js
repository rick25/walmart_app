export const removeFromCart = (product) => (
    {
        type: 'CART_REMOVE',
        payload: product
    }
)