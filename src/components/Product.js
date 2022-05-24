import React, {useState} from 'react';
import './product.css'

function Product(props){
    return(
        <div  id={props.cartIndex} className='product-container' key={props.title+props.price}>
            <div className='product-title' key={props.title}>
                {props.title}
            </div>
            <div className='product-description' key={props.description}>
                {props.description}
            </div>
            <div className='product-image' key={props.price+0.1}>
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className='product-price' key={props.price+props.title}>
                {'$'+props.price}
            </div>
            <div className='product-inputs' key={props.tile+props.description}>
                <button onClick={()=>props.onClick(props.item)}>Add to cart</button>
            </div>

        </div>
    )
}
export default Product;