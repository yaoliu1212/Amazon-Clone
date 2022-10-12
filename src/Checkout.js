import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{ basket, user }] = useStateValue();
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
                    <div className='checkout__hellp'>
                        {/* <h3>Hello {user?.email}</h3> */}
                        <h3>Hello {user ? user.email : 'Guest'}</h3>
                    </div>
                    <h2 className='checkout__title'>Shopping Basket</h2>
                    {/* CheckoutProduct({ id, image, title, price, rating }) */}
                    {/* <CheckoutProduct id={basket[0].id} title={basket[0].title} /> */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
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