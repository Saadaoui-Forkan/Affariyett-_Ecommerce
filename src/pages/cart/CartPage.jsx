import React from 'react'
import './Cart.css'

function CartPage() {

  const cartItems = [
    {
      id:1,
      quantity:2,
      price:10,
      title: "samsung",
      img: "/images/products/mobiles/m1.jpg"
    },
    {
      id:2,
      quantity:4,
      price:100,
      title: "nokia",
      img: "/images/products/mobiles/m2.jpg"
    }
  ]
  return (
    <section className="cart">
        <h1 className="cart-title"> Your Cart</h1>
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
      </section>
  )
}

export default CartPage
