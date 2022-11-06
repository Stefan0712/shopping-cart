import React, {useState} from 'react';
import Product from './components/Product';
import ShoppingCart from './ShoppingCart'
import './styles/products.css';
import backTeaImg from './images/black-tea.jpg'
import lemonTeaImg from './images/lemon-tea.jpg'
import greenTeaImg from './images/green-tea.jpg'
import strawberryTeaImg from './images/strawberry-tea.jpg'


function Products(){
    const [total, setTotal] = useState(0)
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([])
    const [itm, setItm] = useState([
        {
            name: 'Black Tea',
            price: 1.99,
            description: "Best coffee alternative",
            image: blackTeaImg,
            count: 0
    },
    {
            name: 'Green Tea',
            price: 2.99,
            description: "Great for a morning full of energy",
            image: greenTeaImg,
            count: 0


    },
    {
            name: 'Lemon Tea',
            price: 3.99,
            description: "You can't go wrong with this. Everyone loves this flavour",
            image: lemonTeaImg,
            count: 0


    },
    {
            name: 'Strawberry Tea',
            price: 2.49,
            description: "9/10 kids recommend this",
            image: strawberryTeaImg,
            count: 0


    }   
    ])


    if(products.length<itm.length){
   itm.forEach((item)=>{
       setProducts(products =>[...products, <Product id={products.length} key={products.length+'productsKey'} onClick={(item)=>addToCart(item)} item={item} title={item.name} price={item.price} description={item.description} image={item.image} />])
   })
    }
   
    const addToCart=(item)=>{
        
        item.count++;
        setTotal(total=>Math.round(((total+item.price) + Number.EPSILON) * 100) / 100)

    }
    
    const deleteItem=(item)=>{
        item.count=item.count-2;
        console.log(item.count)
        
        setTotal(total=>Math.round(((total-item.price) + Number.EPSILON) * 100) / 100)
    }
 
    return(
        <div className='main-products-container'>
            <div className='products-container'>
                {products}
            </div>
            <div className='shoppingCart-container'>
                <ShoppingCart total={total} cart={itm} onClick={(item)=>deleteItem(item)}/>
            </div>
        </div>
    )
}


export default Products
