import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'; // Adjust the import path as needed
import "../App.css";
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, deleteCart } = useContext(CartContext);

  return (
    <section className="cart_area">
      <div className="container">
        <div className="cart_inner">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="media-body">
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>${item.price.toFixed(2)}</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <span className="input-number-decrement" onClick={() => decreaseQuantity(item.id)}>-</span>
                        <input type="text" value={item.quantity} readOnly />
                        <span className="input-number-increment" onClick={() => increaseQuantity(item.id)}>+</span>
                      </div>
                    </td>
                    <td>
                      <h5>${(item.price * item.quantity).toFixed(2)}</h5>
                    </td>
                    <td>
                      <button onClick={() => deleteCart(item.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="3">Subtotal</td>
                  <td colSpan="2">${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <div className="checkout_btns">
              <button><NavLink to={"/product"}> Continue Shopping</NavLink></button>
              <button>Proceed to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
