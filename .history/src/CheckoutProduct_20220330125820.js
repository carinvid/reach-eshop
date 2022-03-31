
import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
    return ( 
        
           <div className="checkoutProduct">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="image" className="checkoutProduct-image" />
                <div className="product-info">
                    <p className="checkoutProduct-title">
                    Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)
                    </p>
                    <p className="checkoutProduct-price">
                        <small>$</small>
                        <strong>20</strong>
                    </p>
                    <div className="checkoutProduct-rating">
                        ⭐⭐⭐
                    </div>
                    <button>Remove from Basket</button>    
                             
                </div>
            </div> 
        
     );
}

export default CheckoutProduct;