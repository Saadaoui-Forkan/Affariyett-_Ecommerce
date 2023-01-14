import React from 'react'

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
            <li className="navbar-link">
                Home
            </li>
            <li className="navbar-link">
                Electronics and mobiles
            </li>
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
