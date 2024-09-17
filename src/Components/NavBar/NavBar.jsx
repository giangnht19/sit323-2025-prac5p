import React from 'react'
import "./NavBar.css"
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [sticky, setSticky] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
        setSticky(true)
      }else{
        setSticky(false)
      }
    })
  } , [])

  const [mobilemenu, setMobileMenu] = React.useState(false)
  const toggleMenu = () => {
    mobilemenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='navbar-logo'/>
      <ul className={mobilemenu ? '' : 'mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>  
        <li><Link to='benefits' smooth={true} offset={-260} duration={500}>Benefits</Link></li>  
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to='events' smooth={true} offset={-280} duration={500}>Events</Link></li>   
        <li><Link to='testimonials' smooth={true} offset={-280} duration={500}>Testimonials</Link></li>  
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>  
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default NavBar
