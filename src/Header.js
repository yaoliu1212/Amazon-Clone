import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider'
import { auth } from "./firebase";

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            console.log("auth user >>>>>>> " + auth.user);
            auth.signOut();
        }
        // else{}
    }
    return (
        <div className='header'>
            {/* 1. amazon logo image */}
            <Link to='/'>
                <img
                    className='header_logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                />
            </Link>

            {/* 2. search bar: input field + search icon */}
            <div className='header_search'>
                <input className='header_searchInput' type='text' />
                <SearchIcon className='header_searchIcon' />
            </div>

            {/* 3. nevigation bar: signIn + orders + prime + basket*/}
            <div className='header_nav'>
                {/* sign in */}
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header_option'>
                        <span className='header_optionLineOne'>Hello {user ? user.email : 'Guest'}</span>
                        <Link to='/login'>
                            <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'} </span>
                        </Link>
                    </div>
                </Link>
                {/* orders */}
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns</span>
                    <span className='header_optionLineTwo'>& Orders</span>
                </div>
                {/* prime */}
                <div className='header_option'>
                    <span className='header_optionLineOne'>Your</span>
                    <span className='header_optionLineTwo'>Prime</span>
                </div>
                {/* basket */}
                <Link to='/checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingBasketIcon className='header_optionLineTwo' />
                        <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header