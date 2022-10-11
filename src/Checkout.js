import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
    return (
        // Checkout: left + right
        <div className='checkout'>
            {/* 1. left = ADimage + checkout_title */}
            <div className='checkout__left'>
                <img
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt=''
                />

                <div>
                    <h2 className='checkout__title'>Shopping Basket</h2>
                </div>
            </div>
            {/* 2. right =  */}
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout