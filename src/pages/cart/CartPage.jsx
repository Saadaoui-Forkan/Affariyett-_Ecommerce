import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice';
import './Cart.css'

function CartPage() {
  const {cartItems} = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const { removeFromCart } = cartActions;
  // remove from cart
  // const removeFromCartHandler = (item) => {
  //   dispatch(removeFromCart(item))
  // }

  return (
    <section className="cart">
        <h1 className="cart-title"> Your Cart</h1>
        {
          cartItems.length > 0 ? (
            <div className="cart-wrapper">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-img-wrapper">
                      <img
                        className="cart-item-img"
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div className="cart-item-info">
                      <div className="cart-item-title">{item.title}</div>
                      <div className="cart-item-quantity">
                        Quantity:
                        <span>{item.quantity}</span>
                      </div>
                      <div className="cart-item-price">
                        Price:
                        <span>{(item.price * item.quantity).toFixed(2)}$ </span>
                      </div>
                      <i 
                        className="bi bi-trash fill cart-item-delete-icon" 
                        onClick={() => dispatch(removeFromCart(item.id))}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-summary">
                <div className="cart-summary-text">
                  <i className="bi bi-check-circle-fill"></i>
                  Part of your order qualifies for free shipping. Select this option when paying
                  details
                </div>
                <div className="cart-summary-total">
                  Total:
                  <span>
                    {cartItems
                      .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                      .toFixed(2)}
                    $
                  </span>
                </div>
                <button className="cart-summary-btn">Follow up on purchases</button>
              </div>
            </div>
          ) : (
            <h2 className="empty-cart">Your cart is empty</h2>
          )
        }
    </section>
  )
}

export default CartPage
