import React from "react";
import "./CheckoutCard.css";

const CheckoutCard = props => (
    <div className="checkout-card">
        {/* insert modal */}
        <div className="log-btn">
        <button type="button" className="btn btn-primary log-btn">Log-in or Register</button>
        </div>
        {/* checkout as guest */}
        <div className="cust-info">
            <h3>Shipping Information</h3>
            <label htmlFor="cust-name">Name</label>
            <input
                className="custinput-bar form-control"
                name="cust-name"
                type="text"
                placeholder="Name"
                id="cust-name"
            />
            <label htmlFor="cust-address">Street Address 1</label>
            <input
                className="custinput-bar form-control"
                name="cust-address"
                type="text"
                placeholder="Street Address 1"
                id="cust-address"
            />
            <label htmlFor="cust-addresstwo">Street Address 2</label>
            <input
                className="custinput-bar form-control"
                name="cust-addresstwo"
                type="text"
                placeholder="Street Address 2"
                id="cust-addresstwo"
            />
            <label htmlFor="city">City</label>
            <input
                className="custinput-bar form-control"
                name="city"
                type="text"
                placeholder="City"
                id="city"
            />
            <label htmlFor="state">State</label>
            <select className="form-control" id="state" name="state" required>
                <option value="">N/A</option>
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachusetts</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
            </select>
            <label htmlFor="zip">Zip Code</label>
            <input
                className="custinput-bar form-control"
                name="zip"
                type="text"
                placeholder="Zip Code"
                id="zip"
            />
            <label htmlFor="phone">Phone Number</label>
            <input
                className="custinput-bar form-control"
                name="phone"
                type="number"
                placeholder="Phone Number"
                id="phone"
            />
            <label htmlFor="email">E-mail</label>
            <input
                className="custinput-bar form-control"
                name="email"
                type="email"
                placeholder="E-mail"
                id="email"
            />
        </div>

        <div className="bill-info">
            <h3>Billing Information</h3>
            <label htmlFor="billcust-name">Name</label>
            <input
                className="custinput-bar form-control"
                name="billcust-name"
                type="text"
                placeholder="Name"
                id="billcust-name"
            />
            <label htmlFor="billcust-address">Street Address 1</label>
            <input
                className="custinput-bar form-control"
                name="billcust-address"
                type="text"
                placeholder="Street Address 1"
                id="billcust-address"
            />
            <label htmlFor="billcust-address2">Street Address 2</label>
            <input
                className="custinput-bar form-control"
                name="billcust-addresstwo"
                type="text"
                placeholder="Street Address 2"
                id="billcust-addresstwo"
            />
            <label htmlFor="bill-city">City</label>
            <input
                className="custinput-bar form-control"
                name="bill-city"
                type="text"
                placeholder="City"
                id="bill-city"
            />
            <label htmlFor="bill-state">State</label>
            <select className="form-control" id="state" name="state" required>
                <option value="">N/A</option>
                <option value="AK">Alaska</option>
                <option value="AL">Alabama</option>
                <option value="AR">Arkansas</option>
                <option value="AZ">Arizona</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="IA">Iowa</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="MA">Massachusetts</option>
                <option value="MD">Maryland</option>
                <option value="ME">Maine</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MO">Missouri</option>
                <option value="MS">Mississippi</option>
                <option value="MT">Montana</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="NE">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NV">Nevada</option>
                <option value="NY">New York</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="PR">Puerto Rico</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VA">Virginia</option>
                <option value="VT">Vermont</option>
                <option value="WA">Washington</option>
                <option value="WI">Wisconsin</option>
                <option value="WV">West Virginia</option>
                <option value="WY">Wyoming</option>
            </select>

            <label htmlFor="bill-zip">Zip Code</label>
            <input
                className="custinput-bar form-control"
                name="bill-zip"
                type="text"
                placeholder="Zip Code"
                id="billzip"
            />
            <label htmlFor="bill-phone">Phone Number</label>
            <input
                className="custinput-bar form-control"
                name="bill-phone"
                type="number"
                placeholder="Phone Number"
                id="bill-phone"
            />
            <label htmlFor="bill-email">Email</label>
            <input
                className="custinput-bar form-control"
                name="bill-email"
                type="email"
                placeholder="E-mail"
                id="bill-email"
            />
        </div>

        <div className="charge-info">
            <h3>Payment Information</h3>
            <label htmlFor="card-name">Name on card</label>
            <input
                className="custinput-bar form-control"
                name="card-name"
                type="text"
                placeholder="Name on card"
                id="card-name"
            />
            <label htmlFor="card-number">Enter card number</label>
            <input
                className="custinput-bar form-control"
                name="card-number"
                type="text"
                placeholder="Card Number"
                id="card-number"
            />
            <label htmlFor="cvv">CVV</label>
            <input
                className="custinput-bar form-control"
                name="cvv"
                type="text"
                placeholder="CVV"
                id="cvv"
            />
            {/* Expiration */}
            <div className="submit">
            <button type="button" className="btn btn-primary">Submit</button>
            </div>
        </div>


    </div>
);

export default CheckoutCard;