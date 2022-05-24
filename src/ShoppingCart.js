import React, {useState} from 'react'
import './styles/shoppingCart.css'

function ShoppingCart(props){


    return(
        <div className='cart-container'>
            <div key={'total-sum'} className='cart-title'>Shopping Cart  Total: {props.total}</div>
            <div className='cart-products'>{props.cart}</div>
            <div className='cart-inputs'>
                <button>Checkout</button>
            </div>

        </div>
    )
}


export default ShoppingCart