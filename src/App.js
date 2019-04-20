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

const buttonClasses="btn btn-assemble allcaps float-right";

function Review() {
  return (
    <div>
      <ShoppingCart />
      <Link to="/checkout"><button className={buttonClasses}>Check Out</button></Link>
    </div>
  );
}

function Checkout() {
  return (
    <div>
      <CheckoutForm />
      <Link to="/confirm"><button className={buttonClasses}>Order Confirmation</button></Link>
    </div>
  );
}

function Confirm() {
  return (
  <div>
    <h2>Order Confirmation</h2>
    <OrderConf />
    <Link to="/"><button className={buttonClasses}>Home</button></Link>
  </div>
  );
}


export default App;
