import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            {/* 1. Background Image */}
            <div className='home__container'>
                <img className='home__image'
                    src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                    alt='' />

                {/* 2. Rows for product */}
                {/* Row 1 */}
                <div className='home__row'>
                    {/* product1 */}
                    <Product />
                    {/* product2 */}
                </div>
                {/* Row 2 */}
                <div className='home__row'>
                    {/* product1 */}
                    {/* product2 */}
                    {/* product3 */}
                </div>
                {/* Row 3 */}
                <div className='home__row'>
                    {/* product1 */}
                </div>
            </div>
        </div>
    )
}

export default Home