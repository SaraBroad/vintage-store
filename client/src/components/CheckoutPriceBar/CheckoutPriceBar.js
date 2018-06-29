import React from "react";
import "./CheckoutPriceBar.css";

const CheckoutPriceBar = props => (
    <div className="checkout-bar">
        <h1 className="total-heading">Total</h1>
        <div className="sub-total">
            {/* // {props.subtotal} */}
            <p>Subtotal: </p>
            {/* // {props.shipping} */}
            <p>Shipping: </p>
            {/* // {props.tax} */}
            <p>Tax: </p>
        </div>
        {/* {props.total} */}
        <p className="total">Total: </p>


        <button type="button" className="btn btn-primary checkout-btn">Checkout</button>
    </div>
);

export default CheckoutPriceBar;