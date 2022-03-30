import React from "react";
import './Product.css'

function Product() {
    return (  
        <div>
            <div className="product">
                <div className="product-info">
                    <p>Tittle</p>
                    <p className="product-price">
                        <small>$</small>
                        <strong>30.00</strong>
                    </p>
                    <div className="product-rating">⭐⭐⭐</div>
                </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg" alt="red dress" />
                <button>Add to Basket</button>
            </div>
        </div>
    );
}

export default Product;