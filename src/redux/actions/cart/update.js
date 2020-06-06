export const updateCartQuantity = (product, quantity) => (
    {
        type: 'UPDATE_CART',
        payload: {
            product,
            quantity
        }
    }
)