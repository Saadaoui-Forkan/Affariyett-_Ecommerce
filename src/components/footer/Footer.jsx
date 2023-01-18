import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3 className="footer-top-title">We Are Always Available To Help You</h3>
        <div className="footer-top-email">
          <span className="footer-top-email-text">Contact Us Via E-mail</span>
          <span className="footer-top-email-address">
            contact@Affariyett.tn
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        All rights reserved
        <i className="bi bi-c-circle"></i> 
        AinJaffel2023
        </div>
    </footer>
  )
}

export default Footer
