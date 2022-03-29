import React from "react";
import './Header.js';
import "./Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';



function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <StorefrontIcon className="header-log-image" fontSize="large"/>
                <h2 className='header-logoTitle'>eShop</h2>
            </div>
            <div className="header-search">
                <input type="text" className="header-searchInput" />
                <SearchIcon className='header-searchIcon' />
            </div>
            < div className="header-nav">
                <div className="nav-item">
                    <span className="nav-item-one">Hello Guest</span>
                    <span className="nav-item-two">Sing In</span>
                </div>
                <div className="nav-item">
                    <span className="nav-item-one">Your</span>
                    <span className="nav-item-two">Shop</span>
                </div>
    
                <div className="nav-item">
                    <ShoppingBasketIcon className="itemBasket" />
                    <span className="nav-item-two nav-basketCount">0</span>
                </div> 
            </div>
            </div>
                   
    )
}

export default Header;