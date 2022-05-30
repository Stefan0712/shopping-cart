import React, {useState} from 'react';
import './cartItem.css'

function CartProduct(props){
    return(
        <div className='cart-product-container' key={props.product.title+'a'}>
            <div className='cart-product-title'>
                {props.product.count}
                {props.product.title}
            </div>
            <div className='cart-product-image'>
                <img src={props.product.image} alt={props.product.title}></img>
            </div>
            <div className='cart-product-price'>
                {props.product.price}
            </div>
            <div className='cart-product-inputs'>
                <button onClick={()=>{
                    props.product.count=props.product.count+1;
                props.onClick(props.product)
                }}>X</button>
            </div>

        </div>
    )
}
export default CartProduct;