import React from 'react'
import logo from './logo.png'

function HeaderTop({ handleShowSearchInput,form }) {
  return (
    <div className='header-top'>
      <div className="logo-container">
        <img src={logo} alt="logo" className='logo-img' />
        <p className="logo">Affariyett</p>
      </div>
      <div className="form-container">
        <form className={form}>
            <input type="text" name="" className='search-input' placeholder='Search Here ...' />
            <input type="button" value="Search" className='search-btn' />
        </form>
        <div className="search-icon" onClick={handleShowSearchInput}>
          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className="icons">
        <div className="cart-btn">
            <i className="bi bi-cart3"></i>
            <div className="qty"> 0 </div>  
        </div>
        <div className="cart-btn">
            <i className="bi bi-person-fill"></i>
            Sign In
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
