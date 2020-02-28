import CartActionTypes from './cart-types'

// basically the initial state of cartDropdown is hidden and its value is true 
const INITIAL_STATE = {
    hidden:true
}
// here cartReducer is toggling the hidden state of cartDropdown
const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        default:    
            return state;
    }

}

export default cartReducer;