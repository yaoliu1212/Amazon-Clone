import React from 'react'
import './Product.css'

function Project({ title, image, price, rating }) {
    return (
        // Product = product_info + image + button
        <div className='product'>

            {/* 1. product_info = description + price + rating */}
            <div className='product__info'>
                {/* product description */}
                <p>{title}</p>
                {/* product price */}
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* product rating */}
                <div className='product__rating'>
                    {/* <p>rating</p> */}
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
            </div>

            {/* 2. product image */}
            <img src={image} alt='' />

            {/* 3. add button */}
            <button>add</button>
        </div>
    )
}

export default Project