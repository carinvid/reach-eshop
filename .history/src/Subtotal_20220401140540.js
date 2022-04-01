import React from "react";
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return ( 
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>${value}</strong>
                        </p>
                        <small className="subtotal-gift">
                            <input type='checkbox' />
                            This order contains a gift 
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                // prefix={$}
            />
            <button>Proceed to Checkout</button>
        </div>
     );
}

export default Subtotal;