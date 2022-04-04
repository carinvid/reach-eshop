import React from "react";
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";


function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const getBasketTotal = React.useMemo(() => {
        return basket.reduce((amount, item) => item.price + amount, 0);
      }, [basket]);
      
    return ( 
        
        <div className="subtotal">
            <CurrencyFormat 
                renderText = {(value) => (
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
                value={getBasketTotal(basket)}
                displayType={""}
                thousandSeparator={true}
                
            />
            <button>Proceed to Checkout</button>
        </div>
     );
}

export default Subtotal;