import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <>
            <div className='header'>
                <img className='header-img' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                <div className="header-search">
                    <select>
                        <option value="">All</option>
                        <option value="">Alexa Skills</option>
                        <option value="">Amazon Device</option>
                        <option value="">Amazon Fashion</option>
                        <option value="">Amazon Fresh</option>
                        <option value="">Appliances</option>
                        <option value="">Apps and Games</option>
                    </select>
                    <input type="text" />
                    <SearchIcon className='search-logo' />
                </div>
                <div className="right-childs">
                    <div className="header-opt">
                        <span className="opt1 sign-in1">Hello</span>
                        <span className="opt2 sign-in2">Sign In</span>
                    </div>
                    <div className="header-opt">
                        <span className="opt1 order1">Return</span>
                        <span className="opt2 order2"> &order</span>
                    </div>
                    <div className="header-opt">
                        <span className="opt1 prime">Your</span>
                        <span className="opt2 prime">Prime</span>
                    </div>
                    <div className="header-opt">
                        <span className="opt3">0</span>
                        <span className="opt3">cart</span>
                        <ShoppingBasketIcon className='opt3' />
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className='footer-text'>Best Seller</div>
                <div className='footer-text'>Mobile</div>
                <div className='footer-text'>Customer Service</div>
                <div className='footer-text'>Electronics</div>
                <div className='footer-text'>Fashion</div>
                <div className='footer-text'>Today's Deals</div>
                <div className='footer-text'>Computers</div>
                <div className='footer-text'>Home & Kitchen</div>
            </div>
        </>
    )
}

export default Header
