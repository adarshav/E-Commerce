import CartActionTypes from './cart-types'

import addItemToCart from './cart-utils';
// basically the initial state of cartDropdown is hidden and its value is true 
const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}
// here cartReducer is toggling the hidden state of cartDropdown
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                // if the condition matches in the above case of adding items to cart it returns an object as mentioned before it returns whole state and cartItems which is an array, Here In cartItems old items should be added with the new items hence the [state.cartItems, action.payload]
            }
        default:    
            return state;
    }

}

export default cartReducer;