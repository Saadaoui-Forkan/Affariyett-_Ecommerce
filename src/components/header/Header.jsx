import React,{useState} from 'react'
import './Header.css'
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

function Header() {

  const [nav, setNav] = useState('navbar-links')
  const [icon, setIcon] = useState(false)
  const [toggleIcon,setToggleIcon] = useState('icon')

  const animateNav = () => {
    nav === 'navbar-links' ? setNav('navbar-links active-navbar') : setNav('navbar-links')
    // icon === false ? setIcon(true) : setIcon(false)
    setIcon(!icon)
    toggleIcon === 'icon' ? setToggleIcon('icon toggle-icon') : setToggleIcon('icon')
  }

  // show the search input the small screens
  const [form, setForm] = useState('form')
  const handleShowSearchInput = () => {
    form === 'form' ? setForm('form active-form') : setForm('form')
  }

  return (
    <div className='header'>
      <HeaderTop 
        form = { form }
        handleShowSearchInput = { handleShowSearchInput }

      />

      <Navbar 
        animateNav = { animateNav }
        nav = { nav }
        icon = {icon}
        toggleIcon = {toggleIcon}
      />
    </div>
  )
}

export default Header
