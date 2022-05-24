import React, {useState} from 'react';
import Product from './components/Product';
import ShoppingCart from './ShoppingCart'
import './styles/products.css';
import CartProduct from './components/cartItem'


function Products(){
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    const [itm, setItm] = useState([
        {
            name: 'Black Tea',
            price: 1.99,
            description: "Best coffee alternative",
            image: '/images/black-tea.jpg',
    },
    {
            name: 'Green Tea',
            price: 2.99,
            description: "Great for a morning full of energy",
            image: '/images/green-tea.jpg',

    },
    {
            name: 'Lemon Tea',
            price: 3.99,
            description: "You can't go wrong with this. Everyone loves this flavour",
            image: '/images/lemon-tea.jpg',

    },
    {
            name: 'Strawberry Tea',
            price: 2.49,
            description: "9/10 kids recommend this",
            image: './images/strawberry-tea.jpg',

    }   
    ])


    if(products.length<itm.length){
   itm.forEach((item)=>{
       setProducts(products =>[...products, <Product id={products.length} keyProp={products.length+"prodKey"} key={products.length+'productsKey'} onClick={(item)=>addToCart(item)} item={item} title={item.name} price={item.price} description={item.description} image={item.image} />])
   })
    }
   
    const addToCart=(item)=>{
        setCart(cart=>[...cart, <CartProduct key={cart.length+'key'} onClick={()=>{deleteItem(cart.length)}} product={item}/>]);
        setTotal(total=>Math.round(((total+item.price) + Number.EPSILON) * 100) / 100)

    }
    
    const deleteItem=(index)=>{
        setCart([cart.splice(index,1)])
    }
    return(
        <div className='main-products-container'>
            <div className='products-container'>
            <div>{cart.length}</div>
                {products}
            </div>
            <div className='shoppingCart-container'>
                <ShoppingCart cart={cart} total={total}/>
            </div>
        </div>
    )
}


export default Products