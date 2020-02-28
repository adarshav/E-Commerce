import React from 'react';

import  { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { connect } from 'react-redux';
//first we have to import action to trigger the reducer
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './cart-icon.styles.scss';

const CartIcon = ({newToggleCartHidden}) => (
    <div className = 'cart-icon' onClick = {newToggleCartHidden}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    newToggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDispatchToProps)(CartIcon);

// now we have created a cart-icon with span of item-count and now we are creating a dropdown for cart 