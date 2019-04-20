//this component owns our data (defined as a static const here)
//has a few classes to model our data - we have a cart which contains several products a user has selected
//each product has associated info: SKU, Price, name
//the cart has Product data and Quantity (qty * price = total cost)
import React from 'react';

//our data
const cart = [{
  sku: 38094374,
  unitPrice: 24.0,
  name: "Red Shirt",
  quantity: 2
}, {
  sku: 38094375,
  unitPrice: 24.0,
  name: "Blue Shirt",
  quantity: 1
}, {
  sku: 38094321,
  unitPrice: 12.0,
  name: "Blue socks",
  quantity: 4
}]

const calculateTotal = function(cart) {
//this function is horribly inefficient, but it gets me a subtotal
//todo if time - refactor to filter/reduce properly
  let subtotalArr = []
  cart.forEach(function(e) {
    subtotalArr.push(e.unitPrice * e.quantity);
  });
  let subtotal = subtotalArr.reduce(function(a, b){return a+b;})
  return subtotal;
}

class ShoppingCart extends React.Component {

    render() {
        return (
          <div>
            {cart.map(cart => <div key={cart.sku} className="row">
              <div className="product-image col">(product image)</div>
              <div className="product-info col"><span>{cart.name}</span><br /><span className="allcaps">SKU: {cart.sku}</span></div>
              <div className="product-qty col">{cart.quantity}</div>
              <div className="product-price col">${cart.quantity * cart.unitPrice}</div>

            </div>)}
            <p>Subtotal: {calculateTotal(cart)}</p>
          </div>
            )
    }
}

export default ShoppingCart;
