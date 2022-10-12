import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    // console.log('this is the basket >>>>>', basket);
    const removeFromBasket = () => {
        //remove the item from the data layer
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            },
        });
    };
    return (
        // CheckoutProduct = image (left) + product_info(right)
        <div className='checkoutProduct'>
            {/* 1. imge in the left */}
            <img className='checkoutProduct__image' src={image} alt='' />
            {/* 2. info on the right = title + price + rating + button */}
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>🌟</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct