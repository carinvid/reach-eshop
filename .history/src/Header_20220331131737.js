import React from "react";
import './Header.js';
import "./Header.css"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider"



function Header() {
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="header-logo">
                    <StorefrontIcon className="header-log-image" fontSize="large"/>
                    <h2 className='header-logoTitle'>eShop</h2>
                </div>
            </Link>     
            
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
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="nav-item">
                        <ShoppingBasketIcon className="itemBasket" />
                        <span className="nav-item-two nav-basketCount">0</span>
                    </div> 
                </Link>
                
            </div>
        </div>    
                   
    )
}

export default Header;