// this is a caching process and memoization is one of the caching process and it can be done by reselect package
//there are two types of selectors in createSelector 1.Input selector which does not use createSelector 2. output selector which uses both input selector and createSelector
import { createSelector } from 'reselect';
//it is input selector which is a function takes state which is a root reducer and we want only cart and we take it
const selectCart = state => state.cart;
// this is an output selector which takes createSelector and createSelector takes two arguments First is an array which is an input selector which does not mean mandatory and Second is a function which gives the value we want out of the selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart =>cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity *cartItem.price, 0)

)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)

);

// cart-Dropdown and cart-icon are used in selectors