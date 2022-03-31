import React from "react";
import "./Checkout.css";
import "./CheckoutProduct";


function Checkout() {
    return ( 
        <div className="checkout">
            <div className="checkout-left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="adv" className="checkout-add" />
                <div>
                    <h2 className="checkout-title">
                        Your shopping Basket
                    </h2>
                    <CheckoutProduct />
                    
                </div>
            </div>
            <div className="checkout-right">

            </div>
            
        </div>
     );
}

export default Checkout;