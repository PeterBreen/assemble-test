import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShoppingCart from './shoppingcart';
import CheckoutForm from './checkout';
import OrderConf from './orderconf';
import './App.css'; //for any custom style

function App() {
  return (
    <Router>
        <div className="container">
          <div className="header"><h1>Assemble Store</h1></div>
          <Route exact path="/" component={Review} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/confirm" component={Confirm} />
        </div>
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
