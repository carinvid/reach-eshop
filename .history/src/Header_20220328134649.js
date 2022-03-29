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
    <div className="header-nav">
      <div className="nav-item">
      <div className="nav-item-one">Hello Guest</div>
      <div className="nav-item-two">Sing In</div>
    </div>
    
    <div className="nav-item">
      <div className="nav-item-one">Your</div>
      <div className="nav-item-two">Shop</div>
    </div>
    
    <div className="nav-item">
      <ShoppingBasketIcon className="itemBasket" fontSize="large"/>
      <div className="nav-item-two nav-basketCount">0</div>
    </div>
    </div>        
        </div>
    )
}
