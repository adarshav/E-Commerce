import React from 'react';

import  { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
//first we have to import action to trigger the reducer
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './cart-icon.styles.scss';

const CartIcon = ({newToggleCartHidden, itemCount }) => (
    <div className = 'cart-icon' onClick = {newToggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'>{itemCount}</span>
    </div>
)

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = dispatch => ({
    newToggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// now we have created a cart-icon with span of item-count and now we are creating a dropdown for cart 