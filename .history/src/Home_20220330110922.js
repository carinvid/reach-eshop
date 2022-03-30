
import React from 'react';
import "./Home.css";
import Product from "./Product"


function Home () {
    return ( 
        <div className="home">
            <div className="home-container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="eshop" className="home-image" />
                    <div className="home-row">
                        <Product 
                        id="12321341"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={11.96}
                        rating={45}
                        image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
                        />
                        
                        <Product 
                        id="49538094"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"
                    
                        />
                    </div>
                    <div className="home-row">
                        <Product id="4903850"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={199.99}
                        rating={3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
                        />
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