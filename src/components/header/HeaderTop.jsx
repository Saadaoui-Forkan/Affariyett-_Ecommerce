import React from 'react'
import logo from './logo.png' 
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function HeaderTop({ handleShowSearchInput,form }) {
  const { cartItems } = useSelector(state => state.cart)
  return (
    <div className='header-top'>
      <Link to='/' className="logo-container">
        <img src={logo} alt="logo" className='logo-img' />
        <p className="logo">Affariyett</p>
      </Link>
      <div className="navbar-right">
        {/* icons */}
      <div className="icons">
        <Link to='/cart' className="cart-btn">
            <i className="bi bi-cart3"></i>
            {
              cartItems.length>0 &&
              <div className="qty"> {cartItems.length} </div>
            }  
        </Link>
      </div>
      {/* form container */}
      <div className="form-container">
        <form className={form}>
            <input type="text" name="" className='search-input' placeholder='Search Here ...' />
            <input type="button" value="Search" className='search-btn' />
        </form>
        <div className="search-icon" onClick={handleShowSearchInput}>
          <i className="bi bi-search"></i>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HeaderTop
