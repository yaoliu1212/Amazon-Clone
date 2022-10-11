import React from 'react'
import './Product.css'

function Project() {
    return (
        // Product = product_info + image + button
        <div className='product'>

            {/* 1. product_info = description + price + rating */}
            <div className='product__info'>
                {/* product description */}
                <p>product description</p>
                {/* product price */}
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                {/* product rating */}
                <div className='product__rating'>
                    <p>⭐</p>
                </div>
            </div>

            {/* 2. product image */}
            <img src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' alt='' />

            {/* 3. add button */}
            <button>add</button>
        </div>
    )
}

export default Project