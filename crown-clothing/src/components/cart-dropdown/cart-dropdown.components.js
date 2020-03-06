import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//when we click on  go to checkout button in cart dropdown checkout page is displayed but the cart-dropdown will also be displayed that means hidden property of cartdropdown is false we want to be true 
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import CustomButton from '../../components/custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch }) => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items' >
            {
                cartItems.length ? (
                cartItems.map(cartItem => (<CartItem key = {cartItem.id} item = {cartItem} /> ))
                )
                : (<span className = 'empty-message'>Your cart is empty</span>)
            }
            
        </div>
        <CustomButton onClick = {() => { 
            history.push('/checkout')
            dispatch(toggleCartHidden());
            }}> Go To CheckOut</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems:selectCartItemsCount(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown));