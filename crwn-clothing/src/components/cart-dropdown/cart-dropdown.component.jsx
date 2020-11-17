import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => ( // Reading CartItems from connected reducer (Cart)
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} /> // Rendering CartItems based on the state read from redux connect
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

// mapStateToPros = reads the state value
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);