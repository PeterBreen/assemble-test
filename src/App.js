import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShoppingCart from './shoppingcart';
import CheckoutForm from './checkout';
import OrderConf from './orderconf';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Review} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/confirm" component={Confirm} />
    </Router>
  );
}

function Review() {
  return (
    <div>
      <h2>Review Your Order</h2>
      <ShoppingCart />
      <Link to="/checkout">Check Out</Link>
    </div>
  );
}

function Checkout() {
  return (
    <div>
      <h2>Check Out</h2>
      <CheckoutForm />
      <Link to="/confirm">Order Confirmation</Link>
    </div>
  );
}

function Confirm() {
  return (
  <div>
    <h2>Order Confirmation</h2>
    <OrderConf />
    <Link to="/">Home</Link>
  </div>
  );
}


export default App;
