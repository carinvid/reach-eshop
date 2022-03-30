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
                <img src="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="red dress" />
                <button>Add to Basket</button>
            </div>
        </div>
    );
}

export default Product;