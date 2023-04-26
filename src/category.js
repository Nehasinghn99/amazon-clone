import React, { useState } from 'react'
import Products from './Page/Products';
import Cart from './Cart';


const PAGE_PRODUCTS = 'values';

const PAGE_CART = 'cart';

const Category = () => {
    const [cart, setCart] = useState([]);
    const[page, setPage] = useState(PAGE_PRODUCTS);

    
    const addToCart = (values) => {
        setCart((pre)=>{
           return [...pre, values]
        })
        
        // let newCart = [...cart];
        // let itemInCart = newCart.find(
        //     (item) => values.title === item.title
        // );
        // if (itemInCart) {
        //     // itemInCart.quantity++;
        // } else {
        //     itemInCart = {
        //         ...values,
        //         quantity: 1,
        //     }
        //     newCart.push(itemInCart);
        // }
        // setCart(newCart);

    }


    const removeFromCart = (valuesToRemove) => {
        setCart(
            cart.filter((values) => values !== valuesToRemove)
        )
    }
   
    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }
    const clearCart = () => {
        setCart([]);
    }
    
    const getCartTotal = () => {
        return cart.reduce(
            (sum, { quantity }) => sum + quantity, 0
        );
    }
   
    
    
  return (
        <div className='container'>
            <div className="col">
                <header>
                    <button onClick={() => navigateTo(PAGE_CART)}>
                        Go to cart 
                        ({getCartTotal()})
                        </button>

                    <button onClick={() => navigateTo(PAGE_PRODUCTS)}>
                        view Products </button>

                </header>
                {page === PAGE_PRODUCTS && (
                    <Products 
                    addToCart = {addToCart}
                    />
                )}
                {page === PAGE_CART && (
                    <Cart 
                    cart={cart}
                    removeFromCart={removeFromCart} 
                    clearCart={clearCart}/>
                )}
            </div>
        </div>
    )
}

export default Category

