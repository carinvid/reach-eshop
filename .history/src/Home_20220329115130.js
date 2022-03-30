
import React from 'react';
import "./Home.css";
import Product from "./Product"


function Home () {
    return ( 
        <div className="home">
            <div className="home-container">
                <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="eshop" className="home-image" />
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