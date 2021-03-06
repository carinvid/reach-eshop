
import React from 'react';
import "./Home.css";
import Product from "./Product"


function Home () {
    return ( 
        <div className="home">
            <div className="home-container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="eshop" className="home-image" />
                <div className="home-row">
                    <Product />
                    
                    <Product />
                </div>
                <div className="home-row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home-row">
                    <Product />
                </div>
            </div>
        </div>
     );
}

export default Home;