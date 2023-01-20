import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ animateNav,nav,icon,toggleIcon }) {
    
  return (
    <nav className="navbar">
        <div className="toggle-icons" onClick = { animateNav }>

            { !icon 
                ? 
                (<div className={toggleIcon} >
                <i className="bi bi-list"></i>
                </div>) 
                :
                ( <div className={toggleIcon} >
                <i className="bi bi-x-lg"></i> 
                </div>)   
            }
            
           
        </div>

        <ul className = {nav}>
            <Link to='/' className="navbar-link">
                Home
            </Link>
            <Link to='/products' className="navbar-link">
                Electronics and mobiles
            </Link>
            <li className="navbar-link">
                Home and kitchen
            </li>
            <li className="navbar-link">
                Mens
            </li>
            <li className="navbar-link">
                Women
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
