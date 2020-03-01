// utility functions allows us to keep our files clean and organize functions that we may need in multiple files in one location
const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?  {...cartItem, quantity:cartItem.quantity + 1} : 
            cartItem
        )
    }
    // this triggers when new item is added for the first time
    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export default addItemToCart;