import React from 'react';
import './checkout.css';

//this component takes user-submitted billing and shipping info from formfields
//these should be react controlled with state instead of just empty placeholders
//not gonna tackle using Stripe elements


function PaymentInfo() {
return (
  <div className="payment-container">
  <h4>Payment Information</h4>
    <label>
      Name on card
      <input type="text" placeholder="Name on card" />
    </label>

    <label>Card number
    <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
    </label>

    <label>Expiration date:
    <select>
      <option>Jan</option>
      <option>Feb</option>
      <option>...</option>
    </select>
    <select>
      <option>2019</option>
      <option>2020</option>
      <option>...</option>
    </select>
    </label>

    <label>CVV
    <input type="text" placeholder="City" />
    </label>

  </div>
  )
}

function ShippingAddr() {
  return (
    <div className="payment-container">
    <h4>Shipping Address</h4>
    <label>Name
    <input type="text" placeholder="Full Name"></input>
    </label>
    </div>
  )
}

class CheckoutForm extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <PaymentInfo />
        </div>
        <div className="col-6">
          <ShippingAddr />
            <input type="checkbox" id="sameas" />
            <label for="sameas">Billing address same as shipping</label>
        </div>
      </div>
    )
  }
}

export default CheckoutForm
