import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShoppingCart from './shoppingcart';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Review Your Order</Link>
          </li>
          <li>
            <Link to="/billing">Billing/Shipping</Link>
          </li>
          <li>
            <Link to="/confirm">Order Confirmation</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Review} />
        <Route path="/billing" component={Billing} />
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
    </div>
  );
}

function Billing() {
  return (
    <div>
      <h2>Billing/Shipping</h2>
    </div>
  );
}

function Confirm() {
  return (
  <div>
    <h2>Order Confirmation</h2>
  </div>
  );
}


export default App;
