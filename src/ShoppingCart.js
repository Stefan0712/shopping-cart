import React, {useState} from 'react'
import './styles/shoppingCart.css'
import CartProduct from './components/cartItem'
import Product from './components/Product';

function ShoppingCart(props){


    return(
        <div className='cart-container'>
            <div key={'total-sum'} className='cart-title'>Shopping Cart  Total: {props.total}</div>
            <div className='cart-products'>{props.cart.reduce(
                function(filtered,item){
                    if(item.count>0){

                    filtered.push(<CartProduct key={Math.random()} onClick={item=>props.onClick(item)} product={item}/>)
                    }
                    return filtered;
                },[]
                )}</div>
            <div className='cart-inputs'>
                <button>Checkout</button>
            </div>

        </div>
    )
}


export default ShoppingCart